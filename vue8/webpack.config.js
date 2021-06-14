var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry:"./index.js",
    mode:"development",
    output:{
        filename:"index.js",
        publicPath: '/dist/',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/                            
            },        
            {
                test:/\.vue$/,
                loader:"vue-loader" //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
            }
        ]
    }
}
