import trainStations from '../../assets/data/trainStations'

const state = {
  // Variables for train settings
  trainStations: [],
  trainStationA: { id: 'WT', name: 'Weert' },
  trainStationB: { id: 'EHV', name: 'Eindhoven Centraal' },
  // Variables for bus settings
  busStations: [],
  busStationA: [],
  busStationB: [],
  // Variables for weather settings
  currentWeatherLocation: false,
  weatherLocation: null,
  weatherLatitude: null,
  weatherLongitude: null
}

const mutations = {
  // Mutations for train settings
  'SET_TRAINSTATIONS' (state, trainStations) {
    state.trainStations = trainStations
  },
  'UPDATE_TRAINSTATION_A' (state, trainStationA) {
    state.trainStationA = trainStationA
  },
  'UPDATE_TRAINSTATION_B' (state, trainStationB) {
    state.trainStationB = trainStationB
  },
  // Mutations for bus settings
  // Mutations for weather settings
  'ENABLE_CURRENT_WEATHER_LOCATION' (state, currentWeatherLocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      state.weatherLatitude = position.coords.latitude.toFixed(2)
      state.weatherLongitude = position.coords.longitude.toFixed(2)
      state.currentWeatherLocation = true
    })
  },
  'DISABLE_CURRENT_WEATHER_LOCATION' (state, currentWeatherLocation) {
    state.currentWeatherLocation = false
  }
}

const actions = {
  // Actions for train settings
  getTrainStations: ({
    commit
  }) => {
    commit('SET_TRAINSTATIONS', trainStations)
  },
  updateTrainStationA: ({
    commit
  }, trainStationA) => {
    commit('UPDATE_TRAINSTATION_A', trainStationA)
  },
  updateTrainStationB: ({
    commit
  }, trainStationB) => {
    commit('UPDATE_TRAINSTATION_B', trainStationB)
  },
  // Actions for bus settings
  // Actions for weather settings
  enableCurrentWeatherLocation: ({
    commit
  }, currentWeatherLocation) => {
    commit('ENABLE_CURRENT_WEATHER_LOCATION', currentWeatherLocation)
  },
  disableCurrentWeatherLocation: ({
    commit
  }, currentWeatherLocation) => {
    commit('DISABLE_CURRENT_WEATHER_LOCATION', currentWeatherLocation)
  }
}

const getters = {
  // Getters for train settings
  trainStations: state => {
    return state.trainStations
  },
  selectedTrainStationA: state => {
    return state.trainStationA
  },
  selectedTrainStationB: state => {
    return state.trainStationB
  },
  // Getters for bus settings
  busStations: state => {
    return state.busStations
  },
  busStationA: state => {
    return state.busStationA
  },
  busStationB: state => {
    return state.busStationB
  },
  // Getters for weather settings
  currentWeatherLocation: state => {
    return state.currentWeatherLocation
  },
  weatherLocation: state => {
    return state.weatherLocation
  },
  test1: state => {
    return state.weatherLatitude
  },
  test2: state => {
    return state.weatherLongitude
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
