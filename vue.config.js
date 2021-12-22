const vConsolePlugin = require('vconsole-webpack-plugin');
// const path = require('path');
// const webpack = require('webpack')

module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir || 'dist',
  assetsDir: 'static',
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: 'less',
  //     patterns: [
  //       path.resolve(__dirname, "./src/assets/variables.less")
  //     ]
  //   }
  // },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV == 'dev') {
      let pluginDev = [
        new vConsolePlugin({
          filter: [],
          enable: true
        })
      ];
      config.plugins = [...config.plugins, ...pluginDev];
    }
  },
  // chainWebpack: config => {
  //   config.plugin('provide').use(webpack.ProvidePlugin, [{
  //     $: 'jquery',
  //     jquery: 'jquery',
  //     jQuery: 'jquery',
  //     'window.jQuery': 'jquery'
  //   }])
  // },
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://36.142.15.108:16666/', // 代理目标的基础路径
        secure: false,
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    }
  }
}