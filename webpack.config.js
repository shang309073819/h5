const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "[name].css"
});

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: extractSass.extract({
				use: [{
					loader: "css-loader",
					options: {
						minimize: true
					}
				}, {
					loader: "sass-loader"
				}],
				fallback: "style-loader"
			})
		}]
	},
	plugins: [
		extractSass,
	],
	devServer: {
		port: '3000',
		public: 'dev.shuwen.com:3000',
		disableHostCheck: true,
		hot: true,
		compress: true,
	},
}	