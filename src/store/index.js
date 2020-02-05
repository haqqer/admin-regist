import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const set = property => (state, payload) => (state[property] = payload)
const toggle = property => state => (state[property] = !state[property])
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://bemfeb.chickenkiller.com',
    token: localStorage.getItem('token') || null,
    user: {},
    status: '',
    drawer: null
  },
  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer'),
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    }
  },
  getters: {
    getToken: state => state.token,
    getStatus: state => state.status
  },
  actions: {
    async login({commit}, data) {
      try {
        const result = await axios({
          url: this.state.url+'/auth/login',
          data: data,
          method: 'POST'
        })
        const token = result.data.data.token
        const user = result.data.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
        return true
      } catch (error) {
        commit('auth_error', error)
        localStorage.removeItem('token')
        return false
      }
    }
  },
  modules: {
  }
})
