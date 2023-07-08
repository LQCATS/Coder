const path = require('path');

module.exports = {
    webpack: (config) => {
        // 子应用名称
        config.output.library = 'demo-react';
        config.output.libraryTarget = 'umd';
        // 路径别名
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src')
        }
        return config;
    },
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);
            config.headers = {
                "Access-Control-Allow-Origin": "*",
            }
            config.historyApiFallback = true;
            return config;
        }
    }
}