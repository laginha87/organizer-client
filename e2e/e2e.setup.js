const { percySnapshot } = require("@percy/puppeteer");

global.snapshot = async (title) => {
  await percySnapshot(page, title);
};
