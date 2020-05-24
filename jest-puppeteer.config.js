module.exports = {
  launch: {
    headless: true,
    slowMo: 300,
  },
  server: {
    command: 'node mockServer.js',
    launchTimeout: 100000,
  },
};