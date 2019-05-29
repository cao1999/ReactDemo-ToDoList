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
            //配置js和jsx文件的loader
            {test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/},
            //配置css文件的loader 不需要模块化处理
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            //配置scss文件的loader 需要模块化
            {test: /\.scss$/, use: ["style-loader", "css-loader?modules", "sass-loader"]},
            //配置图片的loader
            {test: /\.jpg|png|gif$/, use: "url-loader"}
        ]
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"],
        //配置别名
        alias: {
            "@": path.join(__dirname, "./src")
        }
    }
}