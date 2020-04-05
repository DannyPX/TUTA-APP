import trainStations from '../../assets/data/trainStations'

const state = {
  trainStations: [],
  trainStationA: { id: 'WT', name: 'Weert' },
  trainStationB: { id: 'EHV', name: 'Eindhoven Centraal' }
}

const mutations = {
  'SET_TRAINSTATIONS' (state, trainStations) {
    state.trainStations = trainStations
  },
  'UPDATE_TRAINSTATION_A' (state, trainStationA) {
    state.trainStationA = trainStationA
  },
  'UPDATE_TRAINSTATION_B' (state, trainStationB) {
    state.trainStationB = trainStationB
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
  },
  updateTrainStationB: ({
    commit
  }, trainStationB) => {
    commit('UPDATE_TRAINSTATION_B', trainStationB)
  }
}

const getters = {
  trainStations: state => {
    return state.trainStations
  },
  selectedTrainStationA: state => {
    return state.trainStationA
  },
  selectedTrainStationB: state => {
    return state.trainStationB
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
