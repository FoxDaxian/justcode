/*
 * @Author: fox 
 * @Date: 2018-10-25 14:10:31 
 * @Last Modified by: fox
 * @Last Modified time: 2018-10-25 14:27:33
 */
import config from 'config';
import path from 'path';
import HappyPack from 'happypack';

const entry = path.resolve(__dirname, '../src/index.js');
const outputPath = path.resolve(__dirname, '../dist');

const webpackConfig = {
    entry,
    output: {
        filename: `./${config.outputName}.js`,
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                use: ['happypack/loader?id=babel']
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader']
        })
    ],
    resolve: {
        alias: {
            scss: path.resolve(__dirname, '../src/scss')
        }
    }
};

export default webpackConfig;
