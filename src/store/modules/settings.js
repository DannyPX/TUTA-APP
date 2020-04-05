import trainStations from '../../assets/data/trainStations'

const state = {
  trainStationA: null,
  trainStations: []
}

const mutations = {
  'SET_TRAINSTATIONS' (state, trainStations) {
    state.trainStations = trainStations
  },
  'UPDATE_TRAINSTATION_A' (state, trainStationA) {
    state.trainStationA = trainStationA
  }
}

const actions = {
  getTrainStations: ({
    commit
  }) => {
    commit('SET_TRAINSTATIONS', trainStations)
  },
  updateTrainStationA: ({
    commit
  }, trainStationA) => {
    commit('UPDATE_TRAINSTATION_A', trainStationA)
  }
}

const getters = {
  trainStations: state => {
    return state.trainStations
  },
  selectedTrainStationA: state => {
    return state.trainStationA
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
