import { Prisma, PrismaClient } from "@prisma/client";
import { link } from "fs";
import { cheerio } from "node_modules/scrapfly-sdk/esm/deps";
import ElementType from "domhandler";
import { ScrapflyClient, ScrapeConfig } from "scrapfly-sdk";
import { string } from "zod";

const prisma = new PrismaClient();

const client = new ScrapflyClient({
  key: process.env.SCRAPFLY_KEY!
});

interface PropertyListingCreateManyInput {
  location: string,
  price: string,
  timeForAvailable: string,
  description: string,
}

interface PropertyListInterface {
  location: string[];
  price: string[];
  timeForAvailable: string[];
  description: string[];
  imagesList: string[];
}

const propertyList: PropertyListInterface = {
  location: [],
  description: [],
  timeForAvailable: [],
  price: [],
  imagesList: [],
};

const getText = (node: cheerio.Element | undefined): string => {
  if (!node?.children?.[0]) return '';
  const textNode = node.children[0];
  if ('data' in textNode) {
    return textNode.data;
  }
  return '';
};

export const scrapeList = async () => {
  const api_result = await client.scrape(
    new ScrapeConfig({
      url: "https://flatmates.com.au/rooms/sydney",
      asp: true,
      format: "raw",
      country: "au",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "https://flatmates.com.au/",
        Authorization: "https://flatmates.com.au",
        Accept: "*/*",
      },
    }),
  );

  const locationList = api_result.selector(".styles__address___28Scu");
  const availableList = api_result.selector(".styles__availability___UzGsZ");
  const descriptionList = api_result.selector(".styles__roomInfo___1BEdy");
  const priceList = api_result.selector(".styles__price___3Jhqs");
  const featureList = api_result.selector(".styles__propertyFeature___uH480");
  const imagesList = api_result.selector(
    ".styles__CarouselItemsContainer-sc-10qq1wm-4",
  );

  for (let i = 0; i < locationList.length; i++) {
    const location = getText(locationList[i]);
    const price = getText(priceList[i]);
    const timeAvailable = getText(availableList[i]);
    const description = getText(descriptionList[i]);
    // const images = imagesList[i]?.children?.[0]?.children?.[0]?.children?.[0]?.attribs?.srcset || '';

    propertyList.location.push(location);
    propertyList.price.push(price);
    propertyList.timeForAvailable.push(timeAvailable);
    propertyList.description.push(description);
    // propertyList.imagesList.push(images);
  }

    console.log(propertyList);
};

export async function createListings() {
  await scrapeList();
  const listings: PropertyListingCreateManyInput[] = [];

  for (let i = 0; i < propertyList.location.length; i++) {
    const listing: PropertyListingCreateManyInput = {
      location: propertyList.location[i] ?? '',
      description: propertyList.description[i] ?? '',
      timeForAvailable: propertyList.timeForAvailable[i] ?? '',
      price: propertyList.price[i] ?? '',
    };
    listings.push(listing);
  }

  try {
    await prisma.propertyListing.createMany({
      data: listings,
    });
    console.log("Listings added to the database!");
  } catch (error) {
    console.error("Error inserting listings:", error);
  } finally {
    await prisma.$disconnect();
  }
}
