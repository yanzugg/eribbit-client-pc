import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
// vue2.0 创建仓库 new Vuex.store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage
    createPersistedstate({
      // 本地存储的名字
      key: 'erabbit-client-pc-store',
      // 指定需要存储的模块
      path: ['user', 'cart']
    })
  ]
})
