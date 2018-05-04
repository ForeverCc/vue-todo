const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
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
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}