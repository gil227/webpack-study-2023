const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveFileWebpackPlugin = require("remove-files-webpack-plugin");

 const config = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'./dist')
    },
    stats: {
        children: true,
    },
    plugins:[
        new RemoveFileWebpackPlugin({
            before:{
                test:{folder:"./dist"}
            }
        }),
        new HtmlWebpackPlugin({
            template:"./src/kr.ejs",
            filename:"./dist/kr.html"
        })
        // new HtmlWebpackPlugin({
        //     template:"./src/test/kr_test.ejs",
        //     filename:"./dist/test/kr.html"
        // })
    ],
    module: {
        rules: [],
      },
}

module.exports = () => {
      config.mode = "production";
    return config;
  };