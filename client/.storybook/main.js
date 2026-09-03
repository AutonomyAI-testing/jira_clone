const path = require('path');

const inlineExts = /\.(woff2?|ttf|otf|eot|png|jpe?g|gif)$/i;

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: { autodocs: false },
  webpackFinal: async config => {
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = [
      ...new Set([...(config.resolve.extensions || []), '.js', '.jsx']),
    ];

    // Exclude our inline-handled extensions from Storybook's own asset rules
    config.module.rules = config.module.rules.map(rule => {
      if (!rule || !rule.test) return rule;
      const s = rule.test.toString();
      const touches =
        rule.type &&
        rule.type.startsWith('asset') &&
        (s.includes('woff') ||
          s.includes('png') ||
          s.includes('jpg') ||
          s.includes('jpeg') ||
          s.includes('gif'));
      if (touches) {
        const ex = rule.exclude
          ? Array.isArray(rule.exclude)
            ? rule.exclude
            : [rule.exclude]
          : [];
        return { ...rule, exclude: [...ex, inlineExts] };
      }
      return rule;
    });
    config.module.rules.push({ test: /\.(woff2?|ttf|otf|eot)$/i, type: 'asset/inline' });
    config.module.rules.push({ test: /\.(png|jpe?g|gif)$/i, type: 'asset/inline' });

    return config;
  },
};
