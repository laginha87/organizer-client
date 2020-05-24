const { percySnapshot } = require("@percy/puppeteer");
const pti = require("puppeteer-to-istanbul");

global.snapshot = async (title) => {
  await percySnapshot(page, title);
};

beforeAll(async () => {
  await page.coverage.startJSCoverage();
});

afterAll(async () => {
  const jsCoverage = await page.coverage.stopJSCoverage();
  pti.write(jsCoverage);
});
