const path  = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry:path.join(__dirname,"/src/index.js"),
    mode:"development",
    output:{
        filename:"index.js",
        path:path.join(__dirname,'dist'),
        chunkFilename: "[name].chunk.js", // 非入口chunk名称
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        port:9090,
        open: true
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.js/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    "styl-loader",
                    "css-loader"]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
    ]
}