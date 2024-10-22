import {
    ScrapflyClient, ScrapeConfig, ScreenshotConfig, ExtractionConfig
} from 'scrapfly-sdk';
import { json } from 'stream/consumers';
import { scrapeList } from '~/server/scapeMigration';

const Page = () => {
    return (
        <div>
            <p></p>
        </div>
    );
};

export default Page;
