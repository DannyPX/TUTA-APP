import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    settings
  }
})
