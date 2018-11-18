import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://www.mocky.io/v2/5bdd28dd32000075008c6227',
    loading: true,
    wonders: [],
  },
  mutations: {
    setLoading(state, payload){
        state.loading = payload
    },
    setWonders(state, payload){
        state.wonders = payload
    }
  },
  actions: {
    fetchWonders({commit, state}){
        commit("setLoading", true)
        axios.get(state.api)
            .then(res => {
                if(res.status === 200 && res.statusText === "OK"){
                    console.log(res)
                    commit('setWonders', res.data.data)
                    commit("setLoading", false)
                }
                // console.log(res)
            })
            .catch(err => console.log(err))
    }
  },
  getters: {
      getWonders(state){
        return state.wonders
      }
  }
})
