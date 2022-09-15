const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    entry: './client/index.js',

    
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: '/index.html',
        })
    ],

    devServer: {
      host: 'localhost',
      port: 8080,
      // match the output path
      static: {
        publicPath: '/dist',
        directory: path.join(__dirname, './dist'),
      },
      // enable HMR on the devServer
      hot: true,
      // fallback to root for other urls
      historyApiFallback: true,
  
      headers: { 'Access-Control-Allow-Origin': '*' },
      /**
       * proxy is required in order to make api calls to
       * express server while using hot-reload webpack server
       * routes api fetch requests from localhost:8080/api/* (webpack dev server)
       * to localhost:3000/api/* (where our Express server is running)
       */
      compress: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
    },

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
            use: ["style-loader", "css-loader", 'sass-loader'],
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
    resolve: {
      extensions: ['.js','.jsx','.json']
    },
}