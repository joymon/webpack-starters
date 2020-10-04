module.exports = {
    entry: "./bootstrap.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}