// 开发环境

// 不需要压缩代码
// 需要本地服务和热更新
// css不需要提取到css文件
// sourceMap

const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.config')
module.exports = merge(webpackConfig, {
    devtool: "source-map",
    mode: 'development', // 指定开发者打包模式
    devServer: { //node本地服务器
        host: '127.0.0.1',
        port: 8010
    },
    module: {
        // rules: [ //解开注释报错了
        //     {
        //     test: /\.(scss|sass)$/,
        //     use: [{
        //             loader: 'style-loader'
        //         },
        //         {
        //             loader: 'css-loader'
        //         },
        //         {
        //             loader: 'sass-loader',
        //             options: {
        //                 implementation: require('dart-sass')
        //             }
        //         },
        //         {
        //             loader: 'postcss-loader',
        //             options: {
        //                 plugins: [
        //                     require("autoprefixer") /*自动添加前缀*/
        //                 ]
        //             }
        //         }
        //     ]
        // }, ]
    },
})