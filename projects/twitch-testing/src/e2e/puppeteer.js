const puppeteer = require("puppeteer");

export const startPuppeteer = async () => {
  const headless = !process.env.DEBUG;
  const browser = await puppeteer.launch({ headless });
  process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
  return browser;
};

export const stopPuppeteer = async browser => {
  await browser.close();
};

export const connectPuppeteer = () => {
  return puppeteer.connect({
    browserWSEndpoint: process.env.PUPPETEER_WS_ENDPOINT,
  });
};
