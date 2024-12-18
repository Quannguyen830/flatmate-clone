// // scraping-service.ts
// import { ScrapflyClient, ScrapeConfig } from "scrapfly-sdk";
// import { getText, getImages, getFullPrice, getFeatures } from "../../app/scraping/scrapingListUtils";

// const client = new ScrapflyClient({
//   key: process.env.SCRAPFLY_KEY!,
// });

// export interface PropertyListInterface {
//   location: string[];
//   price: string[];
//   timeForAvailable: string[];
//   description: string[];
//   imagesList: string[][];
//   imagesLength: number[];
//   featureList: string[][];
//   propertyId: string[]
// }

// const propertyList: PropertyListInterface = {
//   location: [],
//   description: [],
//   timeForAvailable: [],
//   price: [],
//   imagesList: [],
//   imagesLength: [],
//   featureList: [],
//   propertyId: []
// };

// export const scrapeList = async () => {
//   const api_result = await client.scrape(
//     new ScrapeConfig({
//       url: "https://flatmates.com.au/rooms/sydney",
//       asp: true,
//       format: "raw",
//       country: "au",
//       headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//         Referer: "https://flatmates.com.au/",
//         Authorization: "https://flatmates.com.au",
//         Accept: "*/*",
//       },
//     })
//   );

//   const locationList = api_result.selector(".styles__address___28Scu");
//   const availableList = api_result.selector(".styles__availability___UzGsZ");
//   const descriptionList = api_result.selector(".styles__roomInfo___1BEdy");
//   const priceList = api_result.selector(".styles__price___3Jhqs");
//   const featureList = api_result.selector(".styles__propertyFeature___uH480");
//   const imagesList = api_result.selector(".styles__CarouselItemsContainer-sc-10qq1wm-4");
//   const imageAltList = api_result.selector("img");
//   const linkList = api_result.selector(".styles__tileLink___1JJi8");
//   const lable = api_result.selector(".styles__legend___JXfb5")

//   // Process features
//   for (const featureItem of featureList) {
//     const feature = getFeatures(featureItem);
//     const tempFeaturesList = propertyList.featureList;

//     if (tempFeaturesList.length == 0 || tempFeaturesList[tempFeaturesList.length - 1]?.length === 3) {
//       tempFeaturesList.push([]);
//     }

//     tempFeaturesList[tempFeaturesList.length - 1]?.push(feature);
//   }

//   // Process images
//   for (let i = 0; i < imageAltList.length - 1; i++) {
//     const image = getImages(imageAltList[i]);
//     const imagesList = propertyList.imagesList;

//     if (imagesList.length == 0 || imagesList[imagesList.length - 1]?.length == 2) {
//       imagesList.push([]);
//     }

//     imagesList[imagesList.length - 1]?.push(image);
//   }

//   // Process location, price, description
//   for (let i = 0; i < locationList.length; i++) {
//     const price = getFullPrice(priceList[i]);
//     const location = getText(locationList[i]);
//     const timeAvailable = getText(availableList[i]);
//     const description = getText(descriptionList[i]);
//     const imagesLength = imagesList[i]?.children.length;

//     propertyList.location.push(location);
//     propertyList.price.push(price);
//     propertyList.timeForAvailable.push(timeAvailable);
//     propertyList.description.push(description);
//     propertyList.imagesLength.push(imagesLength ?? 0);
//   }

//   console.log(linkList[0]?.attribs.href)

//   return propertyList
// };
