const path = require('path');

module.exports = {
	entry: "./browser/react/index.js",
	output: {
		path: path.join(__dirname, './public'),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				exclude: /(node_modules)/,
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				exclude: /(node_modules)/,
				test: /js?$/,
				loader: "babel-loader"
			},
			{
				exclude: /(node_modules)/,
				test: /\.(jpg|png|svg)$/,
				loader: "url-loader"
			}
		]
	}
}