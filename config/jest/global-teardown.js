const {
  stopPuppeteer,
  stopServer,
} = require("@twitch-player/testing/dist/e2e");

module.exports = async () => {
  await stopPuppeteer(global.__BROWSER__);
  await Promise.all(global.__SERVERS__.map(stopServer));
};
