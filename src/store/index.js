import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    services: [],
    partners: [],
    settings: {},
  },
  getters: {
  },
  mutations: {
    // set services 
    setServices(state, services) {
      state.services = services;
    },
    setVesion(state, ourVision) {
      state.ourVision = ourVision
    },
    setPartners(state, partners) {
      state.partners = partners
    },
    setSettings(state, settings) {
      state.settings = settings
    }
  },
  actions: {
    // return services 
    getServices({ commit }) {
      return axios.get('services')
        .then((res) => {
          const reponse = res.data.data;
          commit('setServices', reponse);
        })
    },
    getVesion({ commit }) {
      return axios.get('our-vision')
        .then((res) => {
          const reponse = res.data.data;
          commit('setVesion', reponse);
        })
    },
    partners({ commit }) {
      return axios.get('partners')
        .then((res) => {
          const reponse = res.data.data;
          commit('setPartners', reponse);
        })
    },
    getSettings({ commit }) {
      return axios.get('settings')
        .then((res) => {
          const reponse = res.data.data;
          commit('setSettings', reponse);
        })
    }
  },
  modules: {
  }
})
