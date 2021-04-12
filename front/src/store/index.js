import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function getEvents() {
  return [] 
}

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