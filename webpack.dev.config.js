/**
 * Created by zhangrz on 2017/12/13.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

const path = require('path');

module.exports = {
    // 输入
    entry: path.join(__dirname, 'src/index'),
    /**
     * 输出
     * 到 dist 目录下 bundle文件
     */
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    /**
     * src文件夹下面的以.js结尾的文件，要使用babel解析
     * cacheDirectory是用来缓存编译结果，下次编译加速
     */
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
        }],
    },
};
