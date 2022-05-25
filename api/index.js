const express = require('express')
const puppeteer = require('puppeteer');
const delay = require('delay')
var git = require('git-last-commit');
const fs = require('fs')

const members = require('./members.json')
const lastCommitTime = require('./lastCommitTime')

const app = express();

app.get('/member-pages/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const path = `/screenshots/${name}.png`

        if (!members.includes(name)) {
            res.sendStatus(404);
            return;
        }


        git.getLastCommit( async (err, commit) => {
            const recentCommitTime = commit.committedOn

            if (lastCommitTime < recentCommitTime) { // If there is a new commit
                fs.writeFileSync('./lastCommitTime', recentCommitTime)

                let browser = await puppeteer.launch();
                let page = await browser.newPage();
                await page.setViewport({
                    width: 1920,
                    height: 1080,
                });

                await page.goto(`https://poolesville-high-school-web-dev-club.github.io/member-pages/${name}`);

                // Stephen is the only site with 3D graphics
                if (name === 'stephen')
                    await delay(1000);


                await page.screenshot({ path: __dirname + path });
                await browser.close()
            }
            res.sendFile(__dirname + path);
        });




    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
})


app.listen(3000, () => console.log(`Server initialized on port 3000!`));