const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|svg|ttf)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 2000000 // 2 MB 
                    }
                }
            },
            {
                test: /\.(webm|mp4)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 5000000, // 5 MB 
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
}