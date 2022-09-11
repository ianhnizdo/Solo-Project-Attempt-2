const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');


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
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, 
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
           {
            test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
            use: [
              {
                // loads files as base64 encoded data url if image file is less than set limit
                loader: 'url-loader',
                options: {
                  // if file is greater than the limit (bytes), file-loader is used as fallback
                  limit: 8192,
                },
            },
        ],
      },
    ],
    },
}