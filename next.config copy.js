/** @type {import('next').NextConfig} */

const envVariables = {
  GOOGLE_AUTH_SCOPES_URL: process.env.GOOGLE_AUTH_SCOPES_URL,
  GOOGLE_SPREADSHEET_ID: process.env.GOOGLE_SPREADSHEET_ID,
  GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
  GOOGLE_TYPE: process.env.GOOGLE_TYPE,
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  GOOGLE_TOKEN_URL: process.env.GOOGLE_TOKEN_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  IMAGE_OPTIMIZATION_URL: process.env.IMAGE_OPTIMIZATION_URL,
};

const moduleConfig = {
  reactStrictMode: true,
  env: envVariables,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    // removeConsole: true,
  },
};

// process.env.NEXT_PUBLIC_ENVIRONMENT_PHASE === "production" &&
//   (moduleConfig.images = {
//     loader: "akamai",
//     path: "/",
//     // domains: ["gateway.pinata.cloud", "raspy-bird-7998.on.fleek.co"],
//   });

module.exports = moduleConfig;
