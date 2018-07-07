const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
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
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.json$/,
                use: {
                    loader: "json-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: [
                            "css-loader", 
                            {
                                loader: "stylus-loader",
                                options: {
                                    use: [
                                        require('nib'),
                                        require('rupture')
                                    ],
                                    import: [
                                        '~nib/lib/nib/index.styl',
                                        '~rupture/rupture/index.styl',
                                    ]
                                }
                            }
                        ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", {
                        loader: "less-loader",
                        options: {
                            noIeCompact: true
                        }
                    }]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: Infinity
        // })
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ]
}