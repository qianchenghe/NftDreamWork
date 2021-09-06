const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const webpack = require("webpack");
module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH || './', // 基本路径，打包时加上
    outputDir: process.env.outputDir || 'dist', // 输出文件目录
    assetsDir: 'assets', // 静态文件目录
    lintOnSave: true, // eslint-loader 是否在保存的时候检查
    productionSourceMap: !IS_PROD, // 生产环境的source map
    configureWebpack: {
        //支持jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    chainWebpack: (config) => {
        // 修复HMR(热更新)失效
        config.resolve.symlinks(true);
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@utils', resolve('src/utils'))
            .set('@assets', resolve('src/assets'))
    },
    // 全局引入
    css: {
        extract: IS_PROD,
        sourceMap: !IS_PROD,
        loaderOptions: {
            scss: {
                prependData: `
                    @import "~@assets/css/variable.scss"; 
                    @import "~@assets/css/mixin.scss";
                    @import "~@assets/font/iconfont.css";
                    @import "~@assets/css/common.scss";
                `
            }
        }
    },
    devServer: {
        proxy: {
            '/app_interface': {
               
                 target: `http://10.233.34.23:1820`, // 测试地址

                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // },
            }
        }
    }
}