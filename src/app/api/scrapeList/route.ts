import { NextRequest, NextResponse } from "next/server";
import { ScrapingService } from "~/app/scraping/scrapeService";
import { ScrapeConfig, ScrapeResult, ScrapflyClient } from "scrapfly-sdk";
import { PropertyListDatabase, PropertyListInterface } from "~/app/interface";
import {
  getFeatures,
  getFullPrice,
  getImages,
  getPropertyId,
  getText,
} from "~/app/scraping/scrapingListUtils";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  const instance = ScrapingService.getInstance();
  const result = await instance.scrapePages(
    "https://flatmates.com.au/rooms/sydney",
  );

  if (result) {
    const propertyList = await scrapeDataAndPushIntoObject(result); 
    // for(const propertyId of propertyList.propertyId) {
    //   await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/scrapeProperty?id=${propertyId}`);
    // }

    await savetoDatabase(propertyList)
    return NextResponse.json(propertyList);
  } else {
    return NextResponse.json(
      { error: "Failed to scrape data." },
      { status: 500 },
    );
  }
}

const propertyList: PropertyListInterface = {
  propertyId: [],
  location: [],
  description: [],
  timeForAvailable: [],
  price: [],
  imagesList: [],
  imagesLength: [],
  featureList: [],
};

const prisma = new PrismaClient()

async function scrapeDataAndPushIntoObject(api_result: ScrapeResult) {
  const propertyIdList = api_result.selector(".styles__tileLink___1JJi8");
  const locationList = api_result.selector(".styles__address___28Scu");
  const availableList = api_result.selector(".styles__availability___UzGsZ");
  const descriptionList = api_result.selector(".styles__roomInfo___1BEdy");
  const priceList = api_result.selector(".styles__price___3Jhqs");
  const featureList = api_result.selector(".styles__propertyFeature___uH480");
  const imagesList = api_result.selector(
    ".styles__CarouselItemsContainer-sc-10qq1wm-4",
  );
  const imageAltList = api_result.selector("img");
  const lable = api_result.selector(".styles__legend___JXfb5");

  // Process features
  for (const featureItem of featureList) {
    const feature = getFeatures(featureItem);
    const tempFeaturesList = propertyList.featureList;

    if (
      tempFeaturesList.length == 0 ||
      tempFeaturesList[tempFeaturesList.length - 1]?.length === 3
    ) {
      tempFeaturesList.push([]);
    }

    tempFeaturesList[tempFeaturesList.length - 1]?.push(feature);
  }

  // Process images
  for (let i = 0; i < imageAltList.length - 1; i++) {
    const image = getImages(imageAltList[i]);
    const imagesList = propertyList.imagesList;

    if (
      imagesList.length == 0 ||
      imagesList[imagesList.length - 1]?.length == 2
    ) {
      imagesList.push([]);
    }

    imagesList[imagesList.length - 1]?.push(image);
  }

  for (let i = 0; i < locationList.length; i++) {
    const link = getPropertyId(propertyIdList[i]);
    const price = getFullPrice(priceList[i]);
    const location = getText(locationList[i]);
    const timeAvailable = getText(availableList[i]);
    const description = getText(descriptionList[i]);
    const imagesLength = imagesList[i]?.children.length.toString();

    propertyList.location.push(location);
    propertyList.price.push(price);
    propertyList.timeForAvailable.push(timeAvailable);
    propertyList.description.push(description);
    propertyList.imagesLength.push(imagesLength ?? "");
    propertyList.propertyId.push(link ?? "");
  }

  console.log(propertyList);

  return propertyList;
}

async function savetoDatabase(propertyList: PropertyListInterface) {
  const listings: PropertyListDatabase[] = [];

  for (let i = 0; i < propertyList.location.length; i++) {
    const listing: PropertyListDatabase = {
      propertyId: propertyList.propertyId[i] ?? "",
      location: propertyList.location[i] ?? "",
      description: propertyList.description[i] ?? "",
      timeForAvailable: propertyList.timeForAvailable[i] ?? "",
      price: propertyList.price[i] ?? "",
      imagesLength: propertyList.imagesLength[i] ?? "",
      images: propertyList.imagesList[i] ?? [],
      features: propertyList.featureList[i] ?? [],
    };
    listings.push(listing);
  }

  try {
    for (const listing of listings) {
      await prisma.propertyListing.upsert({
        where: { id: listing.propertyId },
        update: {
          location: listing.location,
          description: listing.description,
          timeForAvailable: listing.timeForAvailable,
          price: listing.price,
          imagesLength: listing.imagesLength,
          images: listing.images,
          features: listing.features,
        },
        create: {
          id: listing.propertyId,
          location: listing.location,
          description: listing.description,
          timeForAvailable: listing.timeForAvailable,
          price: listing.price,
          imagesLength: listing.imagesLength,
          images: listing.images,
          features: listing.features,
        },
      });
    }
  } catch (error) {
    console.error("Error inserting listings:", error);
  } finally {
    await prisma.$disconnect();
  }
}
