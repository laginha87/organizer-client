const { percySnapshot } = require("@percy/puppeteer");
const pti = require("puppeteer-to-istanbul");

global.snapshot = async (title) => {
  await percySnapshot(page, title);
};

// beforeAll(() => page.coverage.startJSCoverage());

// afterAll(() => {
//   return async () => {
//     const jsCoverage = await page.coverage.stopJSCoverage();
//     pti.write(jsCoverage);
//   };
// });
