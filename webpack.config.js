const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    entry: './client/index.js',


    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ],

    module: {
        rules: [
          {
            test: /.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@bagbel/preset-react']
                }
            }
        },
        ],
      },
}