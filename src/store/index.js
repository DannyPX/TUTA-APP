import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Array for storing all the requested data from the NS API
    trainInfo: '{}',
    // Array for storing all the requested data from the 9292 API
    busInfo: '{}',
    // Array for storing all the requested data from the Rain API
    weatherInfo: '{}',
    // Storing the locations for the NS API
    trainLinkAPI: 'EHV&HM',
    // Storing the locations for the 9292 API
    busLinkAPI: 'station-eindhoven&eindhoven_bushalte-looierstraat&2020-04-04T1754'
  },

  mutations: {
    // Replace the current state.trainInfo with the updated value
    'SET_TRAININFO' (state, trainInfo) {
      state.trainInfo = trainInfo
    },
    // Replace the current state.busInfo with the updated value
    'SET_BUSINFO' (state, busInfo) {
      state.busInfo = busInfo
    }
  },

  actions: {
    // Ask all the requested data from the NS API
    getTrainInfo: ({ commit, state }) => {
      axios.get('https://tatu-api-sm.herokuapp.com/api/ns/getTrips/' + state.trainLinkAPI).then(response => {
        commit('SET_TRAININFO', response.data)
      })
    },
    // Ask all the requested data from the 9292 API
    getBusInfo: ({ commit, state }) => {
      axios.get('https://tatu-api-sm.herokuapp.com/api/9292/getTrips/' + state.busLinkAPI).then(response => {
        commit('SET_BUSINFO', response.data)
      })
    }
  },

  getters: {
    // Setup the state.trainInfo as a getter
    trainInfo: state => {
      return state.trainInfo
    },
    // Setup the state.busInfo as a getter
    busInfo: state => {
      return state.busInfo
    }
  }
})
