var FAL_KEY = "7e6ac507-b695-4325-915b-7ab748a4ce65:92d2a82d739236f987c59a9feb8e74a9"
process.env.FAL_KEY = FAL_KEY;

import * as fal from "@fal-ai/serverless-client";
const fs = require('fs');
// read /Users/dev/prg/hire-o-matic/src/pages/need/needs.json
const needs = require("/Users/dev/prg/hire-o-matic/src/pages/need/needs.json");

for (let need of needs) {
    // check if /Users/dev/prg/hire-o-matic/src/assets/needs/${need.title}.jpg exists
    const path = `/Users/dev/prg/hire-o-matic/public/needs/${need.title.replace("/","-")}.jpg`;
    if (fs.existsSync(path)) {
        console.log(`${path} exists`);
        continue;
    }
    const result = await fal.subscribe("fal-ai/fast-lightning-sdxl", {
        input: {
            prompt: `A artistic, hip, and cool, awesome picture or icon depicting the following topic: ${need.title}`,
        },
        logs: true,
        onQueueUpdate: (update) => {
            if (update.status === "IN_PROGRESS") {
                update.logs.map((log) => log.message).forEach(console.log);
            }
        },
    }) as any;
    let imageUrl = result.images[0].url;
    
    //fetch
    let response = await fetch(imageUrl);
    let buffer = await response.arrayBuffer();
    fs.writeFileSync(path, Buffer.from(buffer));
}
