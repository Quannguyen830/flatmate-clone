
import { initList } from '~/server/scrape/scapeMigration';
// import { scrapeList } from '~/server/scapeMigration';

const Page = async () => {
    initList().then(() => {
        console.log("Done!");
    }).catch((err) => {
        console.error(err);
    });
    // scrapeList()

    return (
        <div>
            <p></p>
        </div>
    );
};

export default Page;
