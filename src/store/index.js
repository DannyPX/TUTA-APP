import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trainInfo: '{}',
    busInfo: '{}'
  },

  mutations: {
    'SET_TRAININFO' (state, trainInfo) {
      state.trainInfo = trainInfo
    },
    'SET_BUSINFO' (state, busInfo) {
      state.busInfo = busInfo
    }
  },

  actions: {
    getTrainInfo: ({
      commit
    }) => {
      axios.get('https://tatu-api-sm.herokuapp.com/api/ns/getTrips/EHV&HM').then(response => {
        commit('SET_TRAININFO', response.data)
      })
    },
    getBusInfo: ({
      commit
    }) => {
      axios.get('https://tatu-api-sm.herokuapp.com/api/9292/getTrips/station-eindhoven&eindhoven_bushalte-looierstraat&2020-04-04T1754').then(response => {
        commit('SET_BUSINFO', response.data)
      })
    }
  },

  getters: {
    trainInfo: state => {
      return state.trainInfo
    },
    busInfo: state => {
      return state.busInfo
    }
  }
})
