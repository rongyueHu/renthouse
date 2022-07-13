import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  // 指定用的是存储方式是本地存储
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}, // 存放token
    houseName: '北京', // 默认列表地址
    setSearchHistoryList: [] // 搜索历史

  },
  getters: {
  },
  mutations: {
    setUser (state, payload) { // 判断token
      state.user = payload
    },
    setHouseName (state, payload) { // 城市列表
      state.user = payload
    },
    // 搜索历史
    setSearchHistoryList (state, payload) { // paload 相当于传过来的数据
      let arr = state.setSearchHistoryList // 定义变量接收历史数据
      arr.unshift(payload) // 将传过来的字符串加到数组最前面
      arr = [...new Set(arr)] // 对数组进行去重
      state.setSearchHistoryList = arr // 将最新的数据给到仓库
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
