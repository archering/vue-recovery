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
                use:["style-loader","css-loader"]
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