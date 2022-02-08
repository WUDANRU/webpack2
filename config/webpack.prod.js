// 生产环境

// 压缩代码
// 不需要本地服务和热更新
// 提取css，压缩css文件
// sourceMap
// 构建前清除上一次构建的内容

const path = require('path')
const { merge } = require('webpack-merge')
    // const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = merge(webpackConfig, {
    mode: 'production', // 指定开发者打包模式压缩js代码
    devtool: 'source-map',
    // optimization: { //报错，拆分模块，这个有默认的
    //     splitChunks: {
    //         cacheGroups: {
    //             vendors: {
    //                 name: 'chunk-vendors',
    //                 test: /[\\\/]node_modules[\\\/]/,
    //                 priority: -10,
    //                 chunks: 'initial'
    //             },
    //             common: {
    //                 name: 'chunk-common',
    //                 minChunks: 2,
    //                 priority: -20,
    //                 chunks: 'initial',
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [{
                test: /\.(scss|sass)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            // { // 文件资源加载 变成base64会跟下面图片资源处理冲突所以注释了
            //     test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             name: '[name].[ext]'
            //         }
            //     }]
            // },
            // { // 图片资源处理
            //     test: /\.(png|jpg|gif|svg)/,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: "public/assets/", // 输出目录
            //             limit: 8192,
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        require("autoprefixer"),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),

        new OptimizeCssnanoPlugin({
            sourceMap: true,
            cssnanoOptions: {
                preset: [
                    'default',
                    {
                        mergeLonghand: false,
                        cssDeclarationSorter: false
                    }
                ]
            }
        }),

        new CopyWebpackPlugin({
            patterns: [{
                // from: path.resolve(__dirname, '../', 'src/logo.jpg'),
                // from: path.resolve(__dirname, '../', 'src/assects'),
                from: path.join(__dirname, '../', 'src/assects'),
                to: 'assects'
                    // to: path.resolve(__dirname, '/pubic/assects')
                    // from: "../src/logo.jpg", to: "../dist" 
            }]
        }),
        new CleanWebpackPlugin(), // 用于删除上次构建的文件

    ]
})