const { addWebpackModuleRule, override, useBabelRc } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    use: [{ loader: 'optimized-images-loader' }],
  }),
);
