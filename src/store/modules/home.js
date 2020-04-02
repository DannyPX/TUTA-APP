import axios from 'axios'

const state = { weather: [] }

const mutations = { 'SET_WEATHER' (state, weather) { state.weather = weather } }

const actions = { getWeather: ({ commit }, lat, lon) => { axios.get(`https://https://tatu-sm.herokuapp.com/api/weer/get2HForecast/${lat}&${lon}`).then(response => { commit('SET_WEATHER', response.data) }) } }

const getters = {
}

export default { state, mutations, actions, getters }
