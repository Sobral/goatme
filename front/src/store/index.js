import Vue  from 'vue'
import Vuex from 'vuex'
import {getEvents} from '../service/http'

Vue.use(Vuex);


export default new Vuex.Store({

  state: {
    events: [],
  },
  
  mutations : {
    SET_EVENTS(state, data) {
      state.events = data
    },
  },
  
  getters : {
    events: state => state.events,
  },

  actions : {
    async loadEvents({ commit }) {
      const data = await getEvents()
      commit('SET_EVENTS', data)
    },
  }

});