import axios from 'axios'

const state = {
  // Array for storing all the requested data from the NS API
  trainInfo: '{}',
  // Array for storing all the requested data from the 9292 API
  busInfo: '{}',
  // Array for storing all the requested data from the Rain API
  weatherInfo: '{}',
  // Storing the locations for the NS API
  trainLinkAPI: 'EHV&HM',
  // Storing the locations for the 9292 API
  busLinkAPI: 'station-eindhoven&eindhoven_bushalte-looierstraat&2020-04-04T1754',
  // Storing the latitude and longitude for the Weather API
  weatherLinkAPI: '51.28&5.76',
  // Storing the name of the location for the latitude and longitude
  weatherLocation: 'Eindhoven',
  trainStations: []
}

const mutations = {
  // Replace the current state.trainInfo with the updated value
  'SET_TRAININFO' (state, trainInfo) {
    state.trainInfo = trainInfo
  },
  // Replace the current state.busInfo with the updated value
  'SET_BUSINFO' (state, busInfo) {
    state.busInfo = busInfo
  },
  // Replace the current state.weatherInfo with the updated value
  'SET_WEATHERINFO' (state, weatherInfo) {
    state.weatherInfo = weatherInfo
  }
}

const actions = {
  // Ask all the requested data from the NS API
  getTrainInfo: ({
    commit,
    state
  }) => {
    axios.get('https://tatu-api-sm.herokuapp.com/api/ns/getTrips/' + state.trainLinkAPI).then(response => {
      commit('SET_TRAININFO', response.data)
    })
  },
  // Ask all the requested data from the 9292 API
  getBusInfo: ({
    commit,
    state
  }) => {
    axios.get('https://tatu-api-sm.herokuapp.com/api/9292/getTrips/' + state.busLinkAPI).then(response => {
      commit('SET_BUSINFO', response.data)
    })
  },
  // Ask all the requested data from the Weather API
  getWeatherInfo: ({
    commit,
    state
  }) => {
    axios.get('https://tatu-api-sm.herokuapp.com/api/weer/get2HForecast/' + state.weatherLinkAPI).then(response => {
      commit('SET_WEATHERINFO', response.data)
    })
  }
}

const getters = {
  // Setup the state.trainInfo as a getter
  trainInfo: state => {
    return state.trainInfo
  },
  // Setup the state.busInfo as a getter
  busInfo: state => {
    return state.busInfo
  },
  // Setup the state.weatherInfo as a getter
  weatherInfo: state => {
    return state.weatherInfo
  },
  // Setup the state.weatherLocation as a getter
  weatherLocation: state => {
    return state.weatherLocation
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
