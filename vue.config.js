module.exports = {
    // 配置跨域代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://121.36.111.65:8080/coal',    // 你自己的api接口地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/api/',
                }
            }
        }
    }
};