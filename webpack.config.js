const path = require('path')

const webpack = require('webpack')
const clone = require('lodash/cloneDeep')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const PROD = process.env.NODE_ENV === 'production'

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new LodashModuleReplacementPlugin({
    caching: true,
    cloning: true
  })
]

if (PROD) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  )
}

const baseFileName = 'delivc'

const baseBundleConfig = {
  mode: PROD ? 'production' : 'development',
  context: path.join(__dirname, 'src'),
  entry: [`./${baseFileName}.ts`],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'delivc'
  },
  module: {
    rules: []
  },
  devtool: PROD ? false : 'source-map',
  plugins,
  node: {
    os: 'empty'
  },
  // Show minimal information, but all errors and warnings
  // Except for log generation which have to contain all information
  stats: process.env.WEBPACK_MODE === 'log' ? 'verbose' : 'normal',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
}

const defaultBabelLoader = {
  test: /\.ts?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {}
}

// Browsers
const browserBundle = clone(baseBundleConfig)
browserBundle.module.rules = [
  Object.assign({}, defaultBabelLoader, {
    options: Object.assign({}, defaultBabelLoader.options, {
      envName: 'browser'
    })
  })
]
browserBundle.output.filename = `${baseFileName}.browser${PROD ? '.min' : ''}.js`

// Legacy browsers like IE11
const legacyBundle = clone(baseBundleConfig)
legacyBundle.module.rules = [
  Object.assign({}, defaultBabelLoader, {
    options: Object.assign({}, defaultBabelLoader.options, {
      envName: 'legacy'
    })
  })
]

legacyBundle.output.filename = `${baseFileName}.legacy${PROD ? '.min' : ''}.js`

// Node
const nodeBundle = clone(baseBundleConfig)
nodeBundle.module.rules = [
  Object.assign({}, defaultBabelLoader, {
    options: Object.assign({}, defaultBabelLoader.options, {
      envName: 'node'
    })
  })
]
nodeBundle.target = 'node'
nodeBundle.output.libraryTarget = 'commonjs2'
nodeBundle.output.filename = `${baseFileName}.node${PROD ? '.min' : ''}.js`
delete nodeBundle.node

module.exports = [
  browserBundle,
  legacyBundle,
  nodeBundle
]
