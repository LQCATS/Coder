//引入处理html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//nodejs内置模块，在nodejs引入其他模块都需要require的语法
const path = require('path');
// 引入处理css的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//引入复制插件
const CopyWebpackPlugin = require("copy-webpack-plugin");
//引入webpack插件
const webpack = require("webpack");

//html文件名数组
const htmlLists = ['homePage'];

const { NODE_ENV } = process.env;
module.exports = {
    //模式
    // mode: 'production',
    // mode: 'development',
    mode: NODE_ENV,
    // 配置打包入口
    entry: {
        ...htmlLists.reduce((total, next) => {
            return { ...total, [next]: `./src/js/${next}.js` }
        }, {})
    },
    // 配置出口
    output: {
        path: path.resolve(__dirname, 'dist'),//拼接路径,约定打包输出的文件夹名都叫dist
        filename: 'js/[name].js',//配置打包后的文件路径以及文件名，[name]标识入口是什么名字，最后输出就是什么名字
        clean: true,//将上一次打包的文件清除掉
    },
    //配置插件
    plugins: [
        ...htmlLists.map(item => {
            return new HtmlWebpackPlugin({
                template: `./src/html/${item}.html`,  //指定开发时 源html文件的位置
                filename: `html/${item}.html`,      //指定打包后的文件路径以及文件名
                chunks: [item]            //指定对应需要引入的js文件
            })
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',  //配置文件输出的路径以及名字
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/static",
                    to: "static"
                }
            ]
        }),
        new webpack.ProvidePlugin({
            "$": "jquery"
        })
    ],
    //配置loader 加载器
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    // 'style-loader', //在js中将样式通过style 的方式引入到页面中，后加载
                    MiniCssExtractPlugin.loader, //替换掉了style-loader,将css以文件的形式引入html
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    //   'style-loader',
                    MiniCssExtractPlugin.loader,
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },
            //css中的图片loader配置
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'images',  //处理图片输出过后的路径
                            limit: 1024 * 8,  //对8kb一下的图片进行base64的处理
                            esModule: false //解决插件之间的冲突
                        }
                    }
                ]
            },
            //配置html 中的图片处理
            {
                test: /\.(html|htm)$/i,
                use: [
                    'html-withimg-loader'
                ]
            }
        ]
    },
    // 服务器的配置
    devServer: {
        hot: true,    //热更新
        port: 8080,    //启动的服务器端口号
        open: '/html/homePage.html',  //开启服务器成功后自动打开浏览器
    },
    //打包之后我们的报错以及输出都不是源码的位置，配置source-map能显示源码对应的位置
    devtool: 'source-map'

};