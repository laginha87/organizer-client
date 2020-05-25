module.exports = {
  launch: {
    headless: true,
    slowMo: 300,
  },
  server: [
    {
      command: "node mockserver.graphql.js",
      launchTimeout: 50000,
    },
    {
      command: "node mockserver.public.js",
      launchTimeout: 50000,
    },
  ],
};
