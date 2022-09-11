Trying to figure out how to get a page to render by using the server. I could just serve up an html but I want to see how react does it.

The entry in webpack tells us where we start.

 plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]

This bundles up ejected files into an index html file inside our source file. It tells webpack to do that.


{
            test: /.(css|scss)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
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

      './client/stylesheets/styles.css'