//the test runner used is jest
//yarn add --dev jest
//yarn test
//yarn add --dev puppeteer



// const setNum = require("./app");
// const result = setNum()
// test("If a result was displayed, reset number", () => {
//   expect(result).toBe(theNum);
// })

const puppeteer = require('puppeteer');
// const { clickNumbers, clickOperators, clickEqual, clickClear, setNum, moveNum, displayNum, clearAll } = require("./app");

test('sum of a + b should be c', async () => {
    //start the browser
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920, 1080']
    })
    //create and open the page
    const page = await browser.newPage()
    await page.goto(
        'http://127.0.0.1:5500/src/index.html'
    )

})
