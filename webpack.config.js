/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const path = require("path");

process.env.NODE_ENV = "production";

const WebpackConfig = {
  entry: "./",
  output: {
    path: path.join(__dirname),
    filename: "prepack.min.js",
    library: "Prepack"
  },
  target: 'node',
  node: { fs: 'empty' },
  parallelism: 1,
  profile: false,
  mode: "production",
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = WebpackConfig;
