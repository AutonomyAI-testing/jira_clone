const baseConfig = require('./webpack.config.js');

/**
 * Development server configuration.
 * Binds to 0.0.0.0 to allow access from external networks (required in containerized environments).
 */
module.exports = {
  ...baseConfig,
  devServer: {
    ...baseConfig.devServer,
    host: '0.0.0.0',
  },
};
