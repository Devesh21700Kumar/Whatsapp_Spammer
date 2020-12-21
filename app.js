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
const name ="EEE/ECE/ENI '19";
var f=0;
const krait='';
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
    //const target = await page.waitForSelector("span[title='Amritash Bpgc']");
    //const target = await page.waitForSelector(`span[title=`${name}`]`);
    //const target = await page.waitForSelector("._3Tw1q");
    //const target = await page.waitForSelector("span[title='BijliwalEEE']");
    const target = await page.waitForSelector("span[title='Mayank Mathur Bpgc']");
    await delay(10000);
    console.log('yes');
    await target.click();
    await delay(5000);
    //const krait = await page.waitForSelector("span");
   // const krait = page.$eval("span", (element) => {
     // return element.innerHTML
   // })
    await delay(5000);
    
       /*await page.evaluate((e1) =>{
         if(e1.textContent=="jaane tu"){
            
            krait = "jaane tu"
         }else{
           console.log(e1.textContent);
         }
         } , 
         await page.$('#main > div.RUGMB > div > div > div.tSmQ1 > div:last-child > div > div > div > div.copyable-text > div > span._1VzZY.selectable-text.invisible-space.copyable-text > span'));
    */ // await delay(5000);
      //await delay(5000);
      const krait = await page.evaluate((el) => el.textContent, await page.$('#main > div.RUGMB > div > div > div.tSmQ1 > div:last-child > div > div > div > div.copyable-text > div > span._1VzZY.selectable-text.invisible-space.copyable-text > span'));
      console.log(krait);
    const inp = await page.$(
      "#main > footer > div._3SvgF._1mHgA.copyable-area > div.DuUXI > div > div._1awRl.copyable-text.selectable-text"
    );
    await delay(5000);
    console.log('yes');
    if(krait=='jaane tu'){
      await inp.type(`ya jaane na`);
      await page.keyboard.press("Enter");
    }
    else{
      await inp.type(`F`);
      await page.keyboard.press("Enter");

    }
    console.log('yes');
    //for (let i = 0; i < 6; i++) {
        //await inp.type("dekho hai 4saal and 8sem");
        //await inp.type(`${8-i}times agla sem fodenge`);
       // if(){
       //     await inp.type("");
       // }
        
        //else{
        //    await inp.type("");
        //}
      //  await delay(1000);
       // await page.keyboard.press("Enter");
     // }

    

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

//var x =document.querySelector('.tSmQ1>div:last-child');
//#main > div.RUGMB > div > div > div.tSmQ1 > div:nth-child(39) > div > div > div > div.copyable-text > div > span._1VzZY.selectable-text.invisible-space.copyable-text > span
//var x =document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1 > div:last-child > div > div > div > div.copyable-text > div > span._1VzZY.selectable-text.invisible-space.copyable-text > span');