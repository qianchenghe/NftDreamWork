import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VuePageStack from 'vue-page-stack';
import store from './store';
import http from './api';
import "@assets/css/common.scss";
import * as custom from '@utils/filters'
import $ from 'jquery'
import tool from '@utils/index.js'

// 发布中央事件总线
import Bus from './utils/bus.js';
// import Vconsole from 'vconsole'
import AppHeader from "@components/AppHeader.vue"
// 全局vant引入
import Vant from 'vant';

import 'vant/lib/index.css';
// 按需引入element ui
import 'element-ui/lib/theme-chalk/index.css'
// 全局bootstarp引入
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "zico/css/zico.min.css"

import { Table, TableColumn, Form, FormItem, Button, MessageBox, Dialog } from 'element-ui';
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(Vant);

Vue.use(VuePageStack, { router })
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Button)
Vue.use(Dialog)
Vue.component(AppHeader.name, AppHeader);
Vue.prototype.http = http;
Vue.prototype.$bus = Bus;
Vue.prototype.tool = tool;
Vue.prototype.$alert = MessageBox
Vue.config.productionTip = false;
Object.keys(custom).forEach(key => {
        Vue.filter(key, custom[key])
    })
    // const vConsole = new Vconsole();

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

function newVue() {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
}
if (process.env.NODE_ENV === 'development') {
    newVue()

} else {
    document.addEventListener('deviceready', function() {
        window.StatusBar.overlaysWebView(false)
        window.StatusBar.backgroundColorByName("red");
    })
    newVue()
}