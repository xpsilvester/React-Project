const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
 	/*cacheDirectory是用来缓存编译结果，下次编译加速*/
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader?cacheDirectory=true'],
			include: path.join(__dirname, 'src')
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
	},
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './public/javascripts'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};