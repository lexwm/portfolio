const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Oleksiy Ranuk - Portfolio',
      meta: {
        charset: { charset: 'utf-8' },
        viewport: 'width=device-width, initial-scale=1',
      },
      favicon: path.join(__dirname, "public", "favicon.ico"),
      template: path.join(__dirname, "public", "index.html"),
      inject: 'head',
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "public", "manifest.json"),
          to: path.join(__dirname, "build", "manifest.json")
        },
        {
          from: path.join(__dirname, "public", "android-chrome-192x192.png"),
          to: path.join(__dirname, "build", "android-chrome-192x192.png")
        },
        {
          from: path.join(__dirname, "public", "android-chrome-512x512.png"),
          to: path.join(__dirname, "build", "android-chrome-512x512.png")
        },
        {
          from: path.join(__dirname, "public", "apple-touch-icon.png"),
          to: path.join(__dirname, "build", "apple-touch-icon.png")
        },
        {
          from: path.join(__dirname, "public", "robots.txt"),
          to: path.join(__dirname, "build", "robots.txt")
        },
        {from:'src/assets/img',to:'img'}
      ]
    }),
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
        test: /.s?css$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
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
    extensions: ["*", ".js", ".jsx", ".scss"],
  },
  optimization: {
    minimize: true,
  },
};
