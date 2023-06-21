const CracoLessPlugin = require("craco-less");
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            // 给项目的 src 目录，取名 @
            '@': path.resolve(__dirname, 'src'),
            // 给项目的 src/pages 目录，取名 @p
            '@p': path.resolve(__dirname, 'src/pages'),
            // 给项目的 src/components 目录，取名 @c
            '@c': path.resolve(__dirname, 'src/components'),
        }
    },
    // 配置插件
    plugins: [
        // 配置 less 的插件，用于将项目中的 less 转换为 css 代码
        { plugin: CracoLessPlugin }
    ]
}