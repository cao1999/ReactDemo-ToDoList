//导入需要的包
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let HtmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),
    filename: "index.html"
})

//导出配置对象
module.exports = {
    mode: "development",

    plugins: [
        HtmlPlugin,
    ],

    //这里是module 不是modules
    module: {
        rules: [
            {test: /\.js|jsx/, use: "babel-loader", exclude: /node_modules/}
        ]
    }
}