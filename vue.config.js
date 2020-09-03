// const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: true,
  runtimeCompiler: true,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  // devServer: {
  //   disableHostCheck: true, // 禁用webpack热重载检查
  //   host: '127.0.0.1',
  //   port: 3000,
  //   https: false,
  //   open: false
  // },
  configureWebpack: {
    plugins: [
      // new webpack.ProvidePlugin({
        // jQuery: 'jquery',
        // $: 'jquery',
        // _: 'lodash'
      // }),
      new CompressionPlugin({
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}
