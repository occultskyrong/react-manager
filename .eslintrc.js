module.exports = {
    env: { // 环境
        browser: true
        , node: true
        , jquery: true
        , es6: true
    }, parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    }, plugins: [
        "react"
    ], extends: "google" // 遵循google语法规范
};
