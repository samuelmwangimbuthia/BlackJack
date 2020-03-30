
import path from 'path';


export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, // for webpack to list all the files its bundling
  entry: [
    path.resolve(__dirname, 'index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [],

  // Teach webpack to handle different files
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
