const { resolve } = require("path");
const {
  startPuppeteer,
  startServer,
} = require("@twitch-player/testing/dist/e2e");

const servers = [
  {
    port: 3001,
    public: resolve(__dirname, "../../projects/twitch-public/dist"),
  },
  {
    port: 3002,
    public: resolve(__dirname, "../../projects/twitch-tizen/dist"),
  },
  {
    port: 3003,
    public: resolve(__dirname, "../../projects/twitch-web/dist"),
  },
  {
    port: 3004,
    public: resolve(__dirname, "../../projects/twitch-graphiql/dist"),
  },
];

module.exports = async () => {
  global.__SERVERS__ = await Promise.all(servers.map(startServer));
  global.__BROWSER__ = await startPuppeteer();
};
