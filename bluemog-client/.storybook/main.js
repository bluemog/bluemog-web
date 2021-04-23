const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
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
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
        }
      }
    };
  },
}
