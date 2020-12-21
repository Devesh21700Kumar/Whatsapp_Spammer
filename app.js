/*const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});
  await page.goto(url);
  await page.waitForSelector("span [title='EG69 | r/EG69']");
  const target = await page.$("span [title='EG69 | r/EG69']");
  await target.click();
  const inp = await page.$(
    "#main > footer > div._3SvgF._1mHgA.copyable-area > div.DuUXI > div > div._1awRl.copyable-text.selectable-text"
  );
  
  for (let i = 0; i < 2; i++) {
    await inp.type("Test");
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");*/
const puppeteer = require("puppeteer");

// Login Function Logic
(async function main() {
  try {
    // Configures puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    //await page.setUserAgent(
      //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    //);

    //Navigates to Whatsapp
    const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});
    await page.goto("https://web.whatsapp.com/");
    await delay(5000);
    // //Searches person by title
    await page.waitForSelector("._3Tw1q");
    await delay(5000);
    const target = await page.waitForSelector("span[title='Amritash Bpgc']");
    await delay(10000);
    console.log('yes');
    await target.click();
    await delay(5000);
    const inp = await page.$(
        "#main > footer > div._3SvgF._1mHgA.copyable-area > div.DuUXI > div > div._1awRl.copyable-text.selectable-text"
      );
    await delay(5000);
     console.log('yes');
    
    for (let i = 0; i < 69; i++) {
        await inp.type("ok there is death at 5p.m.");
        await delay(1000);
        await page.keyboard.press("Enter");
      }
    

 /*   //Change to contact you want to send messages to
    const contactName = "Amritash Bpgc";
    await page.click(`span[title='${contactName}']`);
    await delay(5000);
    console.log('yes');
    await page.waitForSelector("._3Tw1q");


    //Amount of messages you want to send
    const amountOfMessages = 5;

    //Loops through cycle of sending message
    for (var i = 0; i < amountOfMessages; i++) {
      await page.evaluate(() => {
        const message = "Are you mad at me? :( ";
        document.execCommand("insertText", false, message);
      });
      await page.click("span[data-testid='send']");
      await delay(500);
    }*/
  } catch (e) {
    console.error("error mine", e);
  }
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}