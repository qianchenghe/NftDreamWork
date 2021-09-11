import axios from "axios";
import loadingServe from '../utils/loading'

// console.log(loadingServe.showFullScreenLoading())
// const token = localStorage.getItem("token");
const server = axios.create({
    headers: {
        "Content-Type": "application/json",
        // Authorization: token
    },
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 500000
});
server.interceptors.request.use(
    config => {
        // let token = '';
        // console.log('222', store.state.AUTHORTOKEN)
        // for (const key in store.state.AUTHORTOKEN) {
        //     token += `&${key}=${store.state.AUTHORTOKEN[key]}`
        // }
        // config.url += `?${token}`;
        // config.url += store.state.NEEDAES ? `&Permission=${rest.encode(store.state.AESKEY)}` : ''
        loadingServe.showFullScreenLoading()
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
server.interceptors.response.use(
    response => {
        // Toast.clear();
        // console.log(response.data)
        loadingServe.tryHideFullScreenLoading()
        if (response.data.code == 0) {
            const data = response.data;
            return data;
        }
    },
    err => {
        // Toast.clear();
        loadingServe.tryHideFullScreenLoading()
        console.log(err);
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = "请求错误";
                    break;
                case 401:
                    err.message = "未授权，请登录";
                    break;
                case 403:
                    err.message = "拒绝访问";
                    break;
                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`;
                    break;
                case 408:
                    err.message = "请求超时";
                    break;
                case 500:
                    err.message = "服务器内部错误";
                    break;
                case 501:
                    err.message = "服务未实现";
                    break;
                case 502:
                    err.message = "网关错误";
                    break;
                case 503:
                    err.message = "服务不可用";
                    break;
                case 504:
                    err.message = "网关超时";
                    break;
                case 505:
                    err.message = "HTTP版本不受支持";
                    break;
                default:
            }
        } else {
            err.message = "服务不可用";
        }
        // Toast.fail(err.message);
        return Promise.reject(err.response ? err.response.data : err.response);
    }
);

export default server;