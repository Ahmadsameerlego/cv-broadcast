import { createStore } from 'vuex'
import auth from './modules/auth';
import common from './modules/common';
import setting from './modules/setting';
import logic from './modules/logic'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    common,
    setting,
    logic
  }
})
