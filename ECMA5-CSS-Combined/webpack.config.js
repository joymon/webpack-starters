var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./entry.js",
    output: {
        filename: "bundle.js"
     },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('css-loader') 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
}