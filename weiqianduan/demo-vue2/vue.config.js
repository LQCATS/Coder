const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    output: {
      // library 的值，需要和主应用注册时的名字一致
      library: 'demo-vue2',
      libraryTarget: 'umd'
    }
  }
})
