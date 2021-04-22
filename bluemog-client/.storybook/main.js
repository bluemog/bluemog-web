const path = require('path');
// const resolvePath = (_path) => path.join(process.cwd(), _path);
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // webpackFinal: async (config) => {
  //   config.resolve.modules = [
  //     ...(config.resolve.modules || []),
  //     path.resolve(__dirname, "../src"),
  //   ];

  //   config.resolve = {
  //     alias: {
  //       ...config.resolve.alias,
  //       "@emotion/styled": resolvePath("node_modules/@emotion/styled"),
  //     }
  //   }

  //   return config;
  // }
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [
          ...config.resolve.modules,
          path.resolve(__dirname, "../src"),
        ],
        alias: {
          ...config.resolve.alias,
          "@emotion/styled": toPath("@emotion/styled"),
        }
      }
    };
  }
}