//the test runner used is jest
//yarn add --dev jest
//yarn test
//yarn add --dev puppeteer

/*User interface testing*/
const puppeteer = require('puppeteer');


describe("button tests", () => {
    test('click number 1,2,3,4,5,6,7,8,9,0', async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //click number 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
        await page.click('#btn1');
        await page.click('#btn2');
        await page.click('#btn3');
        await page.click('#btn4');
        await page.click('#btn5');
        await page.click('#btn6');
        await page.click('#btn7');
        await page.click('#btn8');
        await page.click('#btn9');
        await page.click('#btn0');
        //pass number to the viewer
        const finalText = await page.$eval('#viewer', el => el.textContent);
        expect(finalText).toBe('1234567890');
        browser.close();
    }, 30000);
    test('click 1.1', async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //click number 1.1
        await page.click('#btn1');
        await page.click('#btnDot');
        await page.click('#btn1');
        
        //pass number to the viewer
        const finalText = await page.$eval('#viewer', el => el.textContent);
        expect(finalText).toBe('1.1');
        browser.close();
    }, 30000);
    test('click C', async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //click number 1.1
        await page.click('#btn1');
        await page.click('#btnDot');
        await page.click('#btn1');
        await page.click('#clear');
        //pass number to the viewer
        const finalText = await page.$eval('#viewer', el => el.textContent);
        expect(finalText).toBe('0');
        browser.close();
    }, 30000);
});


describe("operations", () => {
    test('Sum 2 + 3 = 5', async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //click 2 + 3 =
        await page.click('#btn2');
        await page.click('#btnPlus');
        await page.click('#btn3');
        await page.click('#equals');
        //pass number to the viewer
        const finalText = await page.$eval('#viewer', el => el.textContent);
        expect(finalText).toBe('5');
        browser.close();
    }, 30000);

    test('Subtraction 5 - 4 = 1', async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //click 2 + 3 =
        await page.click('#btn5');
        await page.click('#btnMinus');
        await page.click('#btn4');
        await page.click('#equals');
        //pass number to the viewer
        const finalText = await page.$eval('#viewer', el => el.textContent);
        expect(finalText).toBe('1');
        browser.close();
    }, 30000);

    test('Multiplication 6 * 7 = 42', async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //click 2 + 3 =
        await page.click('#btn6');
        await page.click('#btnMult');
        await page.click('#btn7');
        await page.click('#equals');
        //pass number to the viewer
        const finalText = await page.$eval('#viewer', el => el.textContent);
        expect(finalText).toBe('42');
        browser.close();
    }, 30000);

    test('Division 80 / 4 = 20', async () => {
        //start the browser
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920, 1200']
        });
        //create and open the page
        const page = await browser.newPage();
        await page.goto(
            'http://localhost:8082/src/index.html'
        )
        //click 80 / 40 =
        await page.click('#btn8');
        await page.click('#btn0');
        await page.click('#btnDiv');
        await page.click('#btn4');
        await page.click('#equals');
        //pass number to the viewer
        const finalText = await page.$eval('#viewer', el => el.textContent);
        expect(finalText).toBe('20');
        browser.close();
    }, 30000);
})