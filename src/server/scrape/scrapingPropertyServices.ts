// import { ScrapflyClient, ScrapeConfig } from "scrapfly-sdk";

// const client = new ScrapflyClient({
//   key: process.env.SCRAPFLY_KEY!,
// });

// export const scrapeProperty = async () => {
//   const api_result = await client.scrape(
//     new ScrapeConfig({
//       url: "https://flatmates.com.au/share-house-sydney-condell-park-2200-P667124",
//       asp: true,
//       format: "raw",
//       country: "au",
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
//         Referer: "https://flatmates.com.au/rooms/sydney",
//         // Authorization: "https://flatmates.com.au",
//         // Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//       },
//     }),
//   );

//   console.log(api_result.result.content)
// };
