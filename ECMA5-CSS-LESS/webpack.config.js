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
            },
            { 
                test: /\.less$/, 
                loader: ExtractTextPlugin.extract('css-loader!less-loader') 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
}