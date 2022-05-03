import express from 'express';
import fetch from 'node-fetch'; 
import cors from 'cors'
import puppeteer from 'puppeteer'
import getDate from '@jamxu/timestamp';
import fs from 'fs';

const app = express();

app.use(cors())

async function snapshot(url) {
    let browser = await puppeteer.launch({
        headless: true
    })
    let page = await browser.newPage()
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await page.goto(url)
    await page.screenshot({path: 'example.png'})
    await browser.close()
}

app.use(function (req, res, next) {
    console.log(`[${getDate()}] [${req.method} ${req.path}] [${req.ip}] [AUTH: ${req.headers.authorization || 'NONE'}]`);
    next();
})

app.get('/', (req, res) => {
    let params = req.query;
    snapshot(params.url)
    let data = fs.readFileSync('example.png');
    res.setHeader('Content-Type', 'image/png');
    res.send(data)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server initialized on port ${port}!`)
})

