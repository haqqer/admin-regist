import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const set = property => (state, payload) => (state[property] = payload)
const toggle = property => state => (state[property] = !state[property])
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'https://haqqer.mooo.com',
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
        console.log(result)
        const token = result.data.data.token
        const user = result.data.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
        commit('auth_success', token, user)
        return true
      } catch (error) {
        commit('auth_error', error)
        localStorage.removeItem('token')
        return false
      }
    },
    async tokenExp({commit}) {
      try {
        if(this.state.token.length < 1) {
          return false
        }
        const token = this.state.token
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
        const result = await axios.get(this.state.url+'/auth/me')
        const decoded = result.data.data.decoded
        const now = Math.round((new Date().getTime()) / 1000) 
        console.log('exp :'+decoded.exp)
        console.log('now :'+now)
        const timeLeft = decoded.exp - now
        console.log(timeLeft)
        if(timeLeft < 0) {
          return false
        }
        return true
      } catch (error) {
        
      }
    },
    async logout({commit}) {
      try {
        localStorage.removeItem('token');
        return true
      } catch (error) {
        return error
      }
    } 
  },
  modules: {
  }
})
