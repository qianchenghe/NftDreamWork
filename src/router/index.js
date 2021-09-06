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
  { // NFT列表页
    path: '/',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue'),
    meta:{
      title:"NFT列表"
    }
  }, 
  { // NFT制作页
    path: '/',
    name: 'Make',
    component: () => import(/* webpackChunkName: "about" */ '../views/Make.vue'),
    meta:{
      title:"NFT制作"
    }
  }, 
  { // 关于
    path: '/',
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
