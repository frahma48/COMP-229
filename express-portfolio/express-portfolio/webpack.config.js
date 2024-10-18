const path = require('path');

module.exports = {
  entry: './routes/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',   // Output file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  mode: 'development',  // Change to 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/,  // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',  // Generate source maps for debugging
};
