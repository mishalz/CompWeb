const puppeteer = require("puppeteer");

const takeScreenshot = async (url) => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    // Set viewport width and height
    await page.setViewport({ width: 1280, height: 720 });

    //{ waitUntil: 'networkidle0' } will ensure that there are no
    //more than 0 network connections for at least 500ms before
    //the navigation is considered to be finished.
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.screenshot({
      path: `screenshots/screenshot${Math.random() * 100}.png`,
      // fullPage: true,
    });
    
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
};

module.exports = takeScreenshot;
