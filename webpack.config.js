const HTMLWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: {
        main: './src/main.js'},
     devtool: 'inline-source-map',
     devServer: {
         contentBase: '/build'
     },
     module: {
         rules: [
             {
                 test: /\.css$/i,
                 use: ['style-loader','css-loader'],
             },
             {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },

         ],
     }, 
     plugins: [
        new HTMLWebpackPlugin({
            template : './src/index.html'
        })
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
    
   
};