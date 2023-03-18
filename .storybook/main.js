module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    const tsConfigIndex = config.plugins.findIndex(
      (v) => v.constructor.name === "ForkTsCheckerWebpackPlugin"
    );
    config.plugins.splice(tsConfigIndex, 1);
    return config;
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
