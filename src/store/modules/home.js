import axios from 'axios'

const state = {
}

const mutations = {
}

const actions = { getWeather: ({ commit }) => { axios.get('https://tatu-sm.herokuapp.com/api/weer/get2HForecast/51.48&5.66').then(response => { commit('SET_WEATHER', response.data) }) } }

const getters = {
}

export default { state, mutations, actions, getters }
