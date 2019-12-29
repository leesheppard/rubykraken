const path = require('path');

module.exports = {
    // webpack folder's entry js - excluded from jekyll's build process.
    entry: "./webpack/entry.js",
    output: {
        path: path.resolve(__dirname, "src/assets/javascripts"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    mode: "development" // Avoids a warning when running `webpack`.
                        // Set to 'production' for minified version.
};
