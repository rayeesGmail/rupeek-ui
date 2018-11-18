import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://www.mocky.io/v2/5bdd28dd32000075008c6227',
    loading: true,
    wonders: [],
    sort: "Ratings"
  },
  mutations: {
    setLoading(state, payload){
        state.loading = payload
    },
    setWonders(state, payload){
        state.wonders = payload
    },
    setSorting(state, payload){
        state.sort = payload
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
      getWonders(state, getters){
        if(state.sort === "Ratings") {
            getters.sortByRating
        }
        if(state.sort === "Likes"){
            getters.sortByLikes
        }
        return state.wonders
      },
      sortByRating(state){
          state.wonders.sort((a, b) => {
              if (a.ratings < b.ratings){return 1}
              if (a.ratings > b.ratings){return -1}
              return 0
          })
      },
      sortByLikes(state){
          state.wonders.sort((a, b) => {
              if (a.likes < b.likes){return 1}
              if (a.likes > b.likes){return -1}
              return 0
          })
      }
  }
})
