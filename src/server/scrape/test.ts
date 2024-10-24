import { ScrapflyClient, ScrapeConfig } from "scrapfly-sdk";

const client = new ScrapflyClient({
  key: process.env.SCRAPFLY_KEY!,
});

export const getAllData = async () => {
  const api_result = await client.scrape(
    new ScrapeConfig({
      url: "https://flatmates.com.au/rooms/sydney?page=2",
      asp: true,
      format: "raw",
      country: "au",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    }),
  );

  console.log(api_result);
};
