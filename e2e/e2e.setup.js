require('expect-puppeteer')
const { percySnapshot } = require("@percy/puppeteer");


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
