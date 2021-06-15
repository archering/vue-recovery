# 最简单的实现 single-file-component 和 webpack 打包

需要安装

        npm install vue --save

        npm install vue-loader  vue-template-compiler --save-dev

1, babel 相关

        npm install -D babel-loader @babel/core @babel/preset-env

2， webpack相关的

        npm install webpack webpack-cli --save-dev

3, css 相关的，用来处理.vue文件中的css部分

        npm install css-loader style-loader --save-dev

4, html相关

        npm install html-webpack-plugin --save-dev

5，devServer

        npm install webpack-dev-server --save-dev


6,处理babel

文件.babelrc

        {
            "presets": ["@babel/preset-env"]
        }

7,处理
