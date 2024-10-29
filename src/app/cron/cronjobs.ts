import { Cron } from "croner";

export function initCronJobs() {
    const job = new Cron('0 2 * * *', { timezone: "UTC" }, async () => {
        console.log("Starting daily API fetch...");
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/scrapeList`)
    });
}
