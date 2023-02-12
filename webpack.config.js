const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveFileWebpackPlugin = require("remove-files-webpack-plugin");

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'./dist')
    },
    plugins:[
        new RemoveFileWebpackPlugin({
            before:{
                test:{folder:"./dist"}
            }
        }),
        new HtmlWebpackPlugin({
            template:"./src/kr.ejs",
            filename:"./dist/kr.txt"
        }),
        new HtmlWebpackPlugin({
            template:"./src/test/kr_test.ejs",
            filename:"./dist/test/kr.txt"
        })
    ]
}