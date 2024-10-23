
import { createListings } from '~/server/scapeMigration';
// import { scrapeList } from '~/server/scapeMigration';

const Page = async () => {
    createListings().then(() => {
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
