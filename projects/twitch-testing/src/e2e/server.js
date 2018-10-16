const http = require("http");
const handler = require("serve-handler");

export const startServer = ({ port, ...options }) => {
  return new Promise((resolve, reject) => {
    const server = http.createServer((request, response) =>
      handler(request, response, options)
    );

    server.on("error", reject);

    server.listen({ port }, () => {
      resolve(server);
    });
  });
};

export const stopServer = server => {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
