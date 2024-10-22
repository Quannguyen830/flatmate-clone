import {
    ScrapflyClient, ScrapeConfig, ScreenshotConfig, ExtractionConfig
} from 'scrapfly-sdk';
import { json } from 'stream/consumers';
import { createListings } from '~/server/scapeMigration';

const Page = () => {
    createListings()

    return (
        <div>
            <p></p>
        </div>
    );
};

export default Page;
