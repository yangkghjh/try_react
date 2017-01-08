module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ['import', [{ libraryName: "antd", style: 'css' }]]
          ],
        },
        cacheDirectory: true
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    extensions: ['','.coffee','.js']
  }
}