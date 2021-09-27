const path = require("path");

// plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "none",
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				use: ["file-loader"],
			},
		],
	},
	devServer: {
		port: 9000,
		static: {
			directory: path.join(__dirname, "public"),
		},
		hot: true,
		compress: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
	devtool: "inline-source-map",
};
