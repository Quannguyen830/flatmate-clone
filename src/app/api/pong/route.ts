import { NextResponse } from "next/server";
import { string } from "zod";
import { ScrapingService } from "~/app/scraping/scrapeService";
import { getText } from "~/app/scraping/scrapingUtils";

export async function GET() {
  const instance = ScrapingService.getInstance();
  const result = await instance.scrapePages("https://flatmates.com.au/")
  const element = result?.selector(".styles__address___28Scu")

  console.log(getText(element?.[1]))

  return NextResponse.json(result?.result.content);
}