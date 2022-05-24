const express = require('express')
const puppeteer = require('puppeteer');
const delay = require('delay')

const app = express();


app.get('/', async (req, res) => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
    });

    await page.goto(req.query.url);
    await delay(1000);
    await page.screenshot({ path: 'screenshot.png' });
    res.sendFile(__dirname + '/screenshot.png');
    await browser.close()
})


app.listen(3000, () => console.log(`Server initialized on port 3000!`));