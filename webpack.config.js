var path = require("path")
var outPath = path.resolve(__dirname, "./lib")
var nodeExternals = require("webpack-node-externals")

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    output: {
        path: outPath,
        filename: "[name].js",
        libraryTarget: "umd", // 采用通用模块定义
        libraryExport: "default", // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        globalObject: "this" // 兼容node和浏览器运行，避免window is not undefined情况
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader",// translates CSS into CommonJS
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    mode: "none"
}
