import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
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
  { // NFT列表页
    path: '/List',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue'),
    meta:{
      title:"NFT列表"
    }
  }, 
  { // NFT制作页
    path: '/Make',
    name: 'Make',
    component: () => import(/* webpackChunkName: "about" */ '../views/Make.vue'),
    meta:{
      title:"NFT制作"
    }
  }, 
  { // 关于
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:"关于"
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
