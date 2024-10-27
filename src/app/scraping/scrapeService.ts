import { ScrapeConfig, ScrapeResult, ScrapflyClient } from "scrapfly-sdk";

export class ScrapingService {
    private static instance: ScrapingService

    private constructor() {
        
    }

    public static getInstance(): ScrapingService {
        if(!ScrapingService.instance) {
            ScrapingService.instance = new ScrapingService()
        }
        return ScrapingService.instance
    }

    private client = new ScrapflyClient({ key: process.env.SCRAPFLY_KEY! });

    async scrapePages(url: string): Promise<ScrapeResult | null> {
        const config: ScrapeConfig = new ScrapeConfig({
          url: url,
          asp: true,
          country: "US",
        //   render_js: true,
        });

        const result: ScrapeResult = await this.client.scrape(config);
        if(!result) return null
        return result
      }
}