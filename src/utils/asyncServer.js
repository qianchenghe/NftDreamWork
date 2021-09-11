import http from '@/api/index.js';
/*
    @urlModule  api文件下某一个子模块
    @url        子模块中具体的url地址名称
    @type       网络请求的方法 post get put delete
    @params     参数
    @headers    设置请求头,默认可以不设置 为json
*/ 
export function myServes(urlModule, url, type, params, headers) {
    return new Promise((resolve, reject) => {
        http[urlModule][url]({
            type: type,
            params: params,
            headers: headers || {},
            success(res) {
                resolve(res)
            },
            fail(err) {
                console.log(err)
                reject(err)
            }
        });
    });
};