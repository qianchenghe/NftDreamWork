import Vue from 'vue'
import axios from 'axios'
import store from '@/store';
import tool from '@/utils'
import { Toast } from 'vant'
Vue.use(Toast)
const server = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 500000,
})
server.interceptors.request.use(
    config => {
        Toast.loading({
            duration: 0, // 持续展示 toast
            message: '加载中...',
            forbidClick: true
        });
        config.data.userId = store.state.USERID;

        config.data.accessToken = store.state.AUTHORTOKEN.access_token
        // alert('440000000----' + JSON.stringify(config.data))
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
server.interceptors.response.use(
    response => {
        Toast.clear();
        // code :0 数据为空，code:1 查询错误
        if(response.data.code == 1){
            Toast.fail(response.data.message);
            return false
        }
        if(response.data.code == 0){
            Toast.fail(response.data.message);
            const data = response.data.result
            return data
        }
        const data = response.data.result ? JSON.parse(tool.unencode(response.data.result)) : response.data
       // const data = JSON.parse(response.data.result)
        console.log('返回数据----', data)
        return data
    },
    err => {
        Toast.clear();
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break
                case 401:
                    err.message = '未授权，请登录'
                    break
                case 403:
                    err.message = '拒绝访问'
                    break
                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break
                case 408:
                    err.message = '请求超时'
                    break
                case 500:
                    err.message = '服务器内部错误'
                    break
                case 501:
                    err.message = '服务未实现'
                    break
                case 502:
                    err.message = '网关错误'
                    break
                case 503:
                    err.message = '服务不可用'
                    break
                case 504:
                    err.message = '网关超时'
                    break
                case 505:
                    err.message = 'HTTP版本不受支持'
                    break
                default:
            }
        } else {
            err.message = '服务不可用1'
        }
        Toast.fail(err.message);
        return Promise.reject(err.response ? err.response.data : err.response)
    }
)

export default server