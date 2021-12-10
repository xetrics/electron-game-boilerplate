const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./app.config")

require("dotenv").config();

module.exports = {
    entry: "./src/client/app.js",
    mode: (process.env.SCOPE == "development" ? "development" : "production"),
    output: {
        filename: "app_bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: (config.PROJECT_NAME ? config.PROJECT_NAME : "Boilerplate App")
        })
    ]
};