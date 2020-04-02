import axios from 'axios'

const state = { weather: [] }

const mutations = { 'SET_WEATHER' (state, weather) { state.weather = weather } }

const actions = { getWeather: ({ commit }) => { axios.get('https://tatu-sm.herokuapp.com/api/9292/getTrips/station-eindhoven&station-helmond&2020-04-04T1754').then(response => { commit('SET_WEATHER', response.data) }) } }

const getters = {
}

export default { state, mutations, actions, getters }
