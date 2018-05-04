const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === "development";

const config = {
    target: 'web',

    entry: path.resolve(__dirname,'index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
                            name: '[name]-[hash:5].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev? '"development"' : '"production"'
            }
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        })

    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port: 8080, 
        host: '0.0.0.0',
        overlay: {
            errors: true  //编译的错误显示到网页
        },
        hot: true
    };     
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}


module.exports = config;