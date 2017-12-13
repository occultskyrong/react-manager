/**
 * Created by zhangrz on 2017/12/13.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

const path = require('path');

module.exports = {
    // 输入
    entry: path.join(__dirname, 'src/index'),
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
};
