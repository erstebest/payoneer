const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//ngrok tunnel to localhost command (for ngrok app only)
//ngrok http 7070 -host-header="localhost:7070"

module.exports = (env) => {
    const isProduction = env.production;

    return {
        entry: ["@babel/polyfill", "./src/App.jsx"],
        output: {
            path: path.join(__dirname, "public"),
            filename: "js/bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: "babel-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.module\.s?(a|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: {
                                    localIdentName: "[name]__[local]-[hash:base64:5]",
                                },
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.s?(a|c)ss$/,
                    exclude: /\.module\.s?(a|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|svg|webp)$/,
                    loader: "file-loader",
                    options: {
                        outputPath: "images",
                        name: "[name].[ext]",
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: "file-loader",
                    options: {
                        outputPath: "css/fonts",
                        publicPath: "fonts",
                        name: "[name].[ext]",
                        esModule: false,
                    },
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: "css/styles.css" }),
            new HtmlWebpackPlugin({ template: "./src/index.html" }),
        ],
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            port: 7070,
            historyApiFallback: true,
            open: true,
        },
        resolve: {
            extensions: [".js", ".jsx", ".css", ".scss"],
        },
    };
};
