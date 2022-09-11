Trying to figure out how to get a page to render by using the server. I could just serve up an html but I want to see how react does it.

The entry in webpack tells us where we start.

 plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]

This bundles up ejected files into an index html file inside our source file. It tells webpack to do that.