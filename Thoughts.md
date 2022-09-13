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

      command shift h to get relative path

Okay finally got it working.

Now I just have to figure out what the hell I need to load up.


Lets get the front end rendering to give a login Page

What do I want? I want to just get the loggin and logout functionality working first

I should figure out how to connect to the database

For the login what I will probably need to do is be able to access some database with cookies. These cookies or whatever will let me know if the login attempt is new or old.

Based on that I will have to say whether to log in or not.

So within the login function there needs to be a way to access state?

npm run dev, that should start nodemon