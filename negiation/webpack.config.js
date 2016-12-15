/**
 * Created by xdm2556561 on 2016/12/5.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
//使用webpack打包
module.exports = {
    entry: { "Negotiate" : "./js/Negotiate.js", "indexnegotitate" : "./js/indexnegotitate.js", "Participate" : "./js/Participate.js"},
    module: { loaders: [
        //.css 文件使用 style-loader 和 css-loader 来处理
        // .js 文件使用 jsx-loader 来编译处理
        { test: /\.js$/, loader: "jsx-loader" },
        { test: /\.less$/, loader: ExtractTextPlugin.extract('css?sourceMap!' + 'less?sourceMap') },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
        { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]' }
    ]
    },
    output: { path: 'build', filename: "js/[name].js" },
    resolve: { extensions: ['', '.js', '.jsx'] },
    //内联css提取到单独的styles的css plugins
    plugins: [new ExtractTextPlugin('style.css')]
};