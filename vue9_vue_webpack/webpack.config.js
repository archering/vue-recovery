const path  = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,"/src/index.js"),
    mode:"development",
    output:{
        filename:"index.js",
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.css$/,
                loader:"css-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ]
}