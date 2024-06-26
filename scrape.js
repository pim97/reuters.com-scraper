const Scrappey = require('scrappey-wrapper');

// Replace the following details with your own details
const SCRAPPEY_API_KEY = 'API_KEY';

// Create an instance of Scrappey
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

// Optional to add proxy, one is added if not added
const PROXY = 'http://user:pass@host:port'

async function run() {
    try {

        /**
         * Creates a session
         */
        const session = await scrappey.createSession({
            // proxy: PROXY //optional, resi proxy by default
        })

        const scrape = await scrappey.get({
            "url": "https://www.reuters.com/world/americas/protesters-blockade-perus-las-bambas-mine-after-talks-fall-through-2024-04-10/",
            "session": session.session,
        })

        console.log(JSON.stringify(scrape.solution, undefined, 4))

        await scrappey.destroySession({
            "session": session.session
        })

    } catch (error) {
        console.error(error);
    }
}

run();