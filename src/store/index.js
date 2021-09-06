import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    USERNAME: '', // 前登录用户姓名
    USERID: '', // 获当前登录用户账号
  
  },
  mutations: {
    setUser(state, userInfo) {
    
    },
    setToken(state, tokenInfo) {
     
    },
    setROLE(state, role){
      state.ROLE = role
    }
  },
  actions: {
  },
  modules: {
  }
})
