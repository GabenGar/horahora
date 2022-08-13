// @ts-check
const path = require("path");

/**
 * @type {import("next").NextConfig}
 */
const nextJSConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["environment", "src"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  async headers() {
    const env = process.env.NODE_ENV
    if(env == "development"){
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'localhost:443',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, OPTIONS',
            },
            {
              key: "Access-Control-Allow-Credentials",
              value: "true",
            }
          ],
        }
      ]
    }

    return [];
  }
};

module.exports = nextJSConfig;
