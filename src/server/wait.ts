// let api_result = await client.scrape(
//     new ScrapeConfig({
//         url: 'https://flatmates.com.au/share-house-sydney-condell-park-2200-P667124',
//         asp: true,
//         format: "json",
//         country: 'au',
//         headers: {
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//             'Referer': 'https://flatmates.com.au/rooms/sydney',
//             'Authorization': 'https://flatmates.com.au',
//             'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//         }
//     }),
// );

// const schedule = require('node-schedule')

  // schedule.scheduleJob('0 0 * * *', async () => {
  //     scrape_result = await client.scrape(
  //         new ScrapeConfig({
  //             url: 'https://flatmates.com.au/rooms/sydney',
  //             asp: true,
  //             format: "json",
  //             country: 'au',
  //             headers: {
  //                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  //                 'Referer': 'https://flatmates.com.au/',
  //                 'Authorization': 'https://flatmates.com.au',
  //                 'Accept': '*/*',
  //             }
  //         }),
  //     );
  // })