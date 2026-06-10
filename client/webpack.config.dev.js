const baseConfig = require('./webpack.config.js');

module.exports = {
  ...baseConfig,
  devServer: {
    ...baseConfig.devServer,
    host: '0.0.0.0',
  },
};
