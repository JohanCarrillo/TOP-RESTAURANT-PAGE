const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [  /* to load stylesheet */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {  /* to load text */
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};