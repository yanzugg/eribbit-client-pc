import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.store({})
// vue3.0 创建仓库 createStore({})
export default createStore({

  state: {
    username: 'zs'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'ls'
    }
  },
  actions: {
    updateName (context) {
    //  发请求
      setTimeout(() => {
        context.commit('updateName')
      }, 1000)
    }
  },
  modules: {
  }
})
