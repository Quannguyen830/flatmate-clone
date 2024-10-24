import { Prisma, PrismaClient } from "@prisma/client";
import { scrapeList } from "./scrapingListServices";

const prisma = new PrismaClient();

interface PropertyListingCreateManyInput {
  location: string;
  price: string;
  timeForAvailable: string;
  description: string;
  imagesLength: number;
  images: string[];
  features: string[];
  link: string;
}

export async function initList() {
  const propertyList = await scrapeList();
  const listings: PropertyListingCreateManyInput[] = [];

  for (let i = 0; i < propertyList.location.length; i++) {
    const listing: PropertyListingCreateManyInput = {
      location: propertyList.location[i] ?? '',
      description: propertyList.description[i] ?? '',
      timeForAvailable: propertyList.timeForAvailable[i] ?? '',
      price: propertyList.price[i] ?? '',
      imagesLength: propertyList.imagesLength[i] ?? 0,
      images: propertyList.imagesList[i] ?? [],
      features: propertyList.featureList[i] ?? [],
      link: propertyList.propertyId[i] ?? ''
    };
    listings.push(listing);
  }

  try {
    await prisma.propertyListing.deleteMany({});
    console.log("All existing records deleted!");

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
