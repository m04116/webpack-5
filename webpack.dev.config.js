const commonConfig = require('./webpack.common.config');

module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    open: true,
  },
};
