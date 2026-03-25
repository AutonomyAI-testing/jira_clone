module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      'node_modules',
      __dirname + '/../src',
    ];
    config.resolve.alias = {
      shared: __dirname + '/../src/shared',
    };
    return config;
  },
};
