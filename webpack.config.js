/*global __dirname */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './src/ts/index.ts'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					// fallback to style-loader in development
					/*process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,*/
					MiniCssExtractPlugin.loader,
					'css-loader',
					// Compile Sass to CSS
					{
						loader: 'sass-loader',
						options: {
							// Prefer dart-sass
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js', '.scss' ]
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public')
	},
	devtool: "source-map",
	plugins: [
		new MiniCssExtractPlugin(),
		//new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{
			from: './src/*.html',
			to: path.resolve(__dirname, 'public'),
			flatten: true
		}]),
		// CSS handled by Sass.
		new CopyWebpackPlugin([{
			from: './src/css/*.css',
			to: path.resolve(__dirname, 'public'),
			flatten: true
		}]),
		new CopyWebpackPlugin([{
			from: './src/*.ico',
			to: path.resolve(__dirname, 'public'),
			flatten: true
		}])/*,
		new CopyWebpackPlugin([{
			from: './src/assets',
			to: 'assets',
			ignore: [ '*.md' ]
		}])*/
	],
	devServer: {
		open: true
	}
};
