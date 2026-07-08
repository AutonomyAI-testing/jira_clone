const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  webpackFinal: async (config) => {
    // Add src/ to module resolution so absolute imports work
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['.*', '.js', '.jsx'];

    // Force asset/inline for images — map over ALL rules including nested oneOf blocks
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().match(/png|jpg|jpeg|gif/)) {
        return { ...rule, type: 'asset/inline', generator: undefined };
      }
      if (rule.oneOf) {
        return {
          ...rule,
          oneOf: rule.oneOf.map(subRule => {
            if (subRule.test && subRule.test.toString().match(/png|jpg|jpeg|gif/)) {
              return { ...subRule, type: 'asset/inline', generator: undefined };
            }
            return subRule;
          }),
        };
      }
      return rule;
    });
    config.module.rules.unshift({ test: /\.(png|jpg|jpeg|gif)$/, type: 'asset/inline' });
    // Fonts inline too
    config.module.rules.push({ test: /\.(woff2?|eot|ttf|otf|svg)$/, type: 'asset/inline' });

    return config;
  },
};
