import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 首页
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta:{
      title:"首页"
    }
  }, 
]
const apiFiles = require.context('./modules', true, /\.js$/)
apiFiles.keys().map(modulePath => {
  const value = apiFiles(modulePath)
  routes.push(...value.default)
})
const router = new VueRouter({
  routes
})

export default router
