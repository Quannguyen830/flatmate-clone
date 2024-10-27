import { ScrapflyClient, ScrapeConfig, ScrapeResult } from "scrapfly-sdk";
import { OpenAI } from "openai";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import * as z from "zod";
import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";

class ScrapingService {
  private static instance: ScrapingService;
  private constructor() {}
  public static getInstance(): ScrapingService {
    if (!ScrapingService.instance) {
      ScrapingService.instance = new ScrapingService();
    }
    return ScrapingService.instance;
  }
  // first scape all the possible url from the company job url
  private client = new ScrapflyClient({ key: process.env.SCRAPEFLY_API_KEY! });
  private extractUrls(content: string, baseUrl: string): string[] {
    const urls: string[] = [];
    const urlRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>/g;
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      if (match[1]) {
        try {
          const url = new URL(match[1], baseUrl);
          if (url.hostname === new URL(baseUrl).hostname) {
            urls.push(url.href);
          }
        } catch (error) {
          // Ignore invalid URLs
        }
      }
    }
    return [...new Set(urls)]; // Remove duplicates
  }

  async scrapeAllPotentialUrls(companyUrl: string): Promise<string[] | null> {
    const config: ScrapeConfig = new ScrapeConfig({
      url: companyUrl,
      asp: true,
      country: "US",
      render_js: true,
    });
    const result: ScrapeResult = await this.client.scrape(config);
    if (result) {
      const content = result.result.content;
      return this.extractUrls(content, companyUrl);
    }
    return null;
  }

  async findTheJobsPostingUrl(companyUrl: string) {
    const arrayOfUrls = await this.scrapeAllPotentialUrls(companyUrl);
    if (!arrayOfUrls) {
      return null;
    }
    const { object } = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: z.object({
        urls: z.array(
          z.object({
            url: z.string(),
          }),
        ),
      }),
      prompt: `Given the following urls: ${arrayOfUrls?.join(", ")}, please identify the url that leads to the jobs posting page.`,
    });
    return object.urls;
  }
  async scrapeTheContentOfTheJobPostingPage(
    url: string,
  ): Promise<string[] | null> {
    try {
      const config: ScrapeConfig = new ScrapeConfig({
        url: url,
        asp: true,
        country: "US",
        render_js: true,
      });
      const result: ScrapeResult = await this.client.scrape(config);
      if (result && result.result && result.result.content) {
        const links = this.extractNestedLinks(result.result.content, url);
        return links;
      }
      return null;
    } catch (error) {
      console.error(`Error scraping content from ${url}:`, error);
      return null;
    }
  }
  private extractNestedLinks(content: string, baseUrl: string): string[] {
    const links: string[] = [];
    const dom = new JSDOM(content);
    const doc = dom.window.document;
    const extractLinksFromElement = (element: Element) => {
      if (element.tagName === "A" && element.hasAttribute("href")) {
        try {
          const fullUrl = new URL(element.getAttribute("href")!, baseUrl).href;
          links.push(fullUrl);
        } catch (error) {
          // Ignore invalid URLs
        }
      }
      for (const child of element.children) {
        extractLinksFromElement(child);
      }
    };
    extractLinksFromElement(doc.body);
    return [...new Set(links)]; // Remove duplicates
  }
  async scrapeJobPostingPage(companyDomain: string) {
    const jobPostingUrl = await this.findTheJobsPostingUrl(companyDomain);
    if (!jobPostingUrl) {
      return null;
    }
    for (const url of jobPostingUrl) {
      const jobListings = await this.scrapeJobListingsWithPuppeteerAndAI(
        url.url,
      );
      if (jobListings && jobListings.length > 0) {
        return jobListings;
      }
    }
    return null;
  }
  private async scrapeJobListingsWithPuppeteerAndAI(
    url: string,
  ): Promise<string[] | null> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });
    // Get the page layout, focusing on the body content
    const pageLayout = await page.evaluate(() => {
      const simplifyHTML = (element: Element): string => {
        if (element.nodeType === Node.TEXT_NODE) {
          return element.textContent?.trim() || "";
        }
        if (element.nodeType !== Node.ELEMENT_NODE) {
          return "";
        }
        const tagName = element.tagName.toLowerCase();
        if (
          ["script", "style", "noscript", "iframe", "svg"].includes(tagName)
        ) {
          return "";
        }
        const childContent = Array.from(element.childNodes)
          .map((child: ChildNode) => simplifyHTML(child as Element))
          .filter((content: string) => content.length > 0)
          .join(" ");
        if (childContent.length === 0) {
          return "";
        }
        const classAttr = element.getAttribute("class");
        const classString = classAttr ? ` class="${classAttr}"` : "";
        return `<${tagName}${classString}>${childContent}</${tagName}>`;
      };
      return {
        html: simplifyHTML(document.body),
        rect: document.body.getBoundingClientRect(),
      };
    });
    console.log(pageLayout.html);
    // Use AI to analyze the layout and identify potential job listing links
    const { object: aiInstructions } = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: z.object({
        selectors: z.array(z.string()),
      }),
      prompt: `Given the following simplified HTML layout of a job listings page, please scan through the html tag and the content inside that tag. Choose the most suitable tag that protencially lead to the job posting website consider the partten such as "Jobs, Apply, Apply Now" identify CSS selectors for those elements inside the simplified HTML: ${pageLayout.html} only. Please return the selectors css classes of those tags only`,
      temperature: 0,
    });
    console.log(aiInstructions);
    const jobLinks: string[] = [];
    for (const selector of aiInstructions.selectors) {
        console.log("selector processing", selector)
      const elements = await page.locator(selector);
      await elements.click();
      await page.waitForNavigation({ waitUntil: "networkidle0" });
      const currentUrl = page.url();
      console.log("current url", currentUrl);
      jobLinks.push(currentUrl);
      console.log(jobLinks);
      // Use Scrapfly to scrape the individual job posting page
      const jobPostingContent =
        await this.scrapeTheContentOfTheJobPostingPage(currentUrl);
      if (jobPostingContent) {
        // Process or store the job posting content as needed
        console.log(`Scraped job posting from ${currentUrl}`);
      }
      await page.goBack();
      await page.waitForNavigation({ waitUntil: "networkidle0" });
    }
    await browser.close();
    return jobLinks;
  }
}






















