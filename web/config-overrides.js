const { override,addWebpackAlias,addLessLoader,fixBabelImports } = require('customize-cra')
const path = require("path");
/* config-overrides.js */
module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
)