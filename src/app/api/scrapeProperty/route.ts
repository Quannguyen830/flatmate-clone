import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";
import { ScrapeResult } from "scrapfly-sdk";
import { string } from "zod";
import { PropertyDetailInterface } from "~/app/interface";
import { ScrapingService } from "~/app/scraping/scrapeService";
import { getText } from "~/app/scraping/scrapingPropertyUtils";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)
  const id = searchParams.get("id")

  const instance = ScrapingService.getInstance();
  const result = await instance.scrapePages(
    `https://flatmates.com.au/${id}`,
  );

  if (result) {
    const property = await scrapeDataAndPushIntoObject(result); 
    await savetoDatabase(property)
    return NextResponse.json(property);
  } else {
    return NextResponse.json(
      { error: "Failed to scrape data." },
      { status: 500 },
    );
  }
}

const propertyDetail: PropertyDetailInterface = {
  propertyId: "",
  location: "",
  price: [],
  timeForAvailable: [],
  shortDescription: "",
  description: "",
  imagesList: [],
  imagesLength: "",
  shortFeatureList: [],
  tagList: [],
  propertyFeatures: [],
  overviewDetails: [],
  overviewFeatures: [],
  ownerName: "",
  link: ""
};

async function scrapeDataAndPushIntoObject(api_result: ScrapeResult): Promise<PropertyDetailInterface> {
  const propertyId = api_result?.selector("a[itemprop=item]")[4]?.attribs.href;
  const location = getText(api_result.selector(".sc-dvQaRk")[0])
  const shortDescription = getText(api_result.selector(".sc-ZOtfp")[0])
  const imagesLength = getText(api_result.selector(".styles__number___2of24")[0])
  const ownerName = getText(api_result.selector(".styles__status___20DFs>.styles__name___3Cl1v")[0])

  const features = []
  for(let i=0; i<3; i++) {
    features.push((Math.round(Math.random() * 4) + 1).toString());
  }

  const priceArray = []
  const priceList = api_result.selector(".styles__roomRent___1bNpE")
  for (const price of priceList) {
    if (price && "children" in price) {
      const childrenNode = price.children[0];
      if (childrenNode && "children" in childrenNode) {
        const dataNode = childrenNode.children[0];
        if (dataNode && "data" in dataNode) {
          priceArray.push(dataNode.data);
        }
      }
    }
  }

  let description = ""
  const descriptionNode = api_result.selector(".styles__description__wrapper___1LKEI")[0]?.children
  if (descriptionNode && "length" in descriptionNode) {
    for (const childrenNode of descriptionNode) {
      if (childrenNode && "data" in childrenNode) {
        description += childrenNode.data;
      } else if (childrenNode && "children" in childrenNode) {
        if (childrenNode.children.length === 1) {
          const textNode = childrenNode.children[0];
          if (textNode && "data" in textNode) description += textNode.data;
        } else {
          for (const dataNode of childrenNode.children) {
            if (dataNode && "data" in dataNode) description += dataNode.data;
          }
        }
      }
    }    
  }

  const images = []
  const imagesList = api_result.selector(".carousel-slide")
  for (const image of imagesList) {
    if (image && "children" in image) {
      const attribsNode = image.children[0];
      if (attribsNode && "attribs" in attribsNode) {
        const srcNode = attribsNode.attribs;
        if (srcNode && "src" in srcNode) {
          images.push(srcNode.src);
        }
      }
    }
  }

  propertyDetail.propertyId = propertyId ?? ""
  propertyDetail.description = description ?? ""
  propertyDetail.location = location ?? ""
  propertyDetail.shortDescription = shortDescription
  propertyDetail.imagesLength = imagesLength
  propertyDetail.ownerName = ownerName
  propertyDetail.price = priceArray
  propertyDetail.imagesList = images
  propertyDetail.shortFeatureList = features

  console.log(propertyDetail)

  return propertyDetail
}

async function savetoDatabase(propertyDetail: PropertyDetailInterface) {
  try {
    await prisma.property.upsert({
      where: { id: propertyDetail.propertyId },
      update: {
        location: propertyDetail.location,
        description: propertyDetail.description,
        timeForAvailable: propertyDetail.timeForAvailable,
        price: propertyDetail.price,
        imagesLength: propertyDetail.imagesLength,
        imagesList: propertyDetail.imagesList,
        shortDescription: propertyDetail.shortDescription,
        shortFeatureList: propertyDetail.shortFeatureList,
        tagList: propertyDetail.tagList,
        propertyFeatures: propertyDetail.propertyFeatures,
        overviewDetails: propertyDetail.overviewDetails,
        overviewFeatures: propertyDetail.overviewFeatures,
        ownerName: propertyDetail.ownerName,
        link: propertyDetail.link,
      },
      create: {
        id: propertyDetail.propertyId,
        location: propertyDetail.location,
        description: propertyDetail.description,
        timeForAvailable: propertyDetail.timeForAvailable,
        price: propertyDetail.price,
        imagesLength: propertyDetail.imagesLength,
        imagesList: propertyDetail.imagesList,
        shortDescription: propertyDetail.shortDescription,
        shortFeatureList: propertyDetail.shortFeatureList,
        tagList: propertyDetail.tagList,
        propertyFeatures: propertyDetail.propertyFeatures,
        overviewDetails: propertyDetail.overviewDetails,
        overviewFeatures: propertyDetail.overviewFeatures,
        ownerName: propertyDetail.ownerName,
        link: propertyDetail.link,
      },
    });
    console.log("Update database !!!")
  } catch (error) {
    console.error("Error inserting listings:", error);
  } finally {
    await prisma.$disconnect();
  }
}
