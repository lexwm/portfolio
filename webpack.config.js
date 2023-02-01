const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const PUBLIC_DIR = path.resolve(__dirname, "public");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    // publicPath: PUBLIC_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // publicPath: PUBLIC_DIR,
      favicon: path.join(__dirname, "public", "favicon.ico"),
      template: path.join(__dirname, "public", "index.html"),
      inject: 'head',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
