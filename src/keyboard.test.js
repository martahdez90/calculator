const puppeteer = require('puppeteer');


describe("Test de keyboard", () => {
    test("number", async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        //go to my app
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //type the number
        await page.type('#viewer', '1');
        await page.type('#viewer', '2');
        await page.type('#viewer', '3');
        await page.type('#viewer', '4');
        await page.type('#viewer', '5');
        await page.type('#viewer', '6');
        await page.type('#viewer', '7');
        await page.type('#viewer', '8');
        await page.type('#viewer', '9');
        await page.type('#viewer', '0');
        // await expect(page).toClick('button', { text: '2' })
        //resolve
        const testResult = await page.$eval('#viewer', el => el.textContent)
        expect(testResult).toBe('0')
    }, 30000);
    test("sum", async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        //go to my app
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //type the number
        await page.type('#viewer', '1');
        await page.type('#viewer', '2');
        await page.type('#viewer', '3');
        await page.type('#viewer', '4');
        await page.type('#viewer', '5');
        await page.type('#viewer', '6');
        await page.type('#viewer', '7');
        await page.type('#viewer', '8');
        await page.type('#viewer', '9');
        await page.type('#viewer', '0');
        // await expect(page).toClick('button', { text: '2' })
        //resolve
        const testResult = await page.$eval('#viewer', el => el.textContent)
        expect(testResult).toBe('0')
    }, 30000);
});
  


