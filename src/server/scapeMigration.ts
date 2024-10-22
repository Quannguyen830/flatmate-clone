import { PrismaClient } from "@prisma/client";
import { link } from "fs";
import { ScrapflyClient, ScrapeConfig } from "scrapfly-sdk";
import { string } from "zod";

const prisma = new PrismaClient();

const client = new ScrapflyClient({
  key: "scp-live-518fd59fbd624e34b95923dcc2418838",
});

const propertyList = {
  location: [],
  description: [],
  timeForAvailable: [],
  price: [],
  featureList: [],
  imagesList: [],
};

// let api_result = await client.scrape(
//     new ScrapeConfig({
//         url: 'https://flatmates.com.au/share-house-sydney-condell-park-2200-P667124',
//         asp: true,
//         format: "json",
//         country: 'au',
//         headers: {
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             'Referer': 'https://flatmates.com.au/rooms/sydney',
//             'Authorization': 'https://flatmates.com.au',
//             'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//         }
//     }),
// );

// const schedule = require('node-schedule')

const scrapeList = async () => {
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

  // schedule.scheduleJob('0 0 * * *', async () => {
  //     scrape_result = await client.scrape(
  //         new ScrapeConfig({
  //             url: 'https://flatmates.com.au/rooms/sydney',
  //             asp: true,
  //             format: "json",
  //             country: 'au',
  //             headers: {
  //                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  //                 'Referer': 'https://flatmates.com.au/',
  //                 'Authorization': 'https://flatmates.com.au',
  //                 'Accept': '*/*',
  //             }
  //         }),
  //     );
  // })

  const locationList = api_result.selector(".styles__address___28Scu");
  const availableList = api_result.selector(".styles__availability___UzGsZ");
  const descriptionList = api_result.selector(".styles__roomInfo___1BEdy");
  const priceList = api_result.selector(".styles__price___3Jhqs");
  const featureList = api_result.selector(".styles__propertyFeature___uH480");
  const imagesList = api_result.selector(
    ".styles__CarouselItemsContainer-sc-10qq1wm-4",
  );

  for (let i = 0; i < locationList.length; i++) {
    propertyList.location.push(locationList[i]?.children[0].data);
    propertyList.price.push(priceList[i]?.children[0].data);
    propertyList.timeForAvailable.push(availableList[i]?.children[0].data);
    propertyList.description.push(descriptionList[i]?.children[0].data);
    propertyList.imagesList.push(
      imagesList[i]?.children[0].children[0].children[0].attribs.srcset,
    );
  }

  console.log(propertyList);
};

export async function createListings() {
  scrapeList();
  const listings = [];

  for (let i = 0; i < propertyList.location.length; i++) {
    listings.push({
      location: propertyList.location[i],
      description: propertyList.description[i],
      timeForAvailable: propertyList.timeForAvailable[i],
      price: propertyList.price[i],
      featureList: propertyList.featureList,
    });
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