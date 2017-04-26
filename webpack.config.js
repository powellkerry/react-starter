var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssimport = require('postcss-import');
var nodeExternals = require('webpack-node-externals');
var combineLoaders = require('webpack-combine-loaders');

var isProduction = process.env.NODE_ENV === 'production';

var clientLoaders = isProduction ? productionPluginDefine.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: false
    })
]) : [];

var cssLoader = ExtractTextPlugin.extract({
    use: [
        { loader: 'css-loader', options: { modules: true, sourceMap: true, importLoaders: 1, localIdentName:'[local]'}},
        { loader: 'postcss-loader', options: {sourceMap: 'inline', plugins: function() { return [require('postcss-import'), require('postcss-extend'), require('postcss-cssnext')] } } }
    ]
});

var cssPlugin = new webpack.LoaderOptionsPlugin({
    options: {
        context: __dirname,
        postcss: [
            require('postcss-cssnext')
        ],
        map: true
    }
});

var commonLoaders = [{
    test: /\.json$/,
    loader: 'json-loader'
}];

module.exports = [{
    entry: './src/server.js',
    output: {
        path: __dirname,
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    externals: nodeExternals(),
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: cssLoader
        }].concat(commonLoaders)
    },
    plugins: [
        cssPlugin,
        new ExtractTextPlugin("./dist/assets/app.css")
    ]
}, {
    entry: './src/client/client.js',
    output: {
        path: __dirname + '/dist/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: cssLoader
            }
        ]
    },
    plugins: [
        cssPlugin,
        new ExtractTextPlugin("app.css")
    ]
}];
