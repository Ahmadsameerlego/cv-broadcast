import { createStore } from 'vuex'
import auth from './modules/auth';
import common from './modules/common';
import setting from './modules/setting';
import logic from './modules/logic';
import axios from 'axios';
export default createStore({
  state: {
    messages : [],
    rooms : [],
    singleRoom : []
  },
  getters: {
  },
  mutations: {
    // set chat rooms 
    setChatRooms(state, rooms){
        state.rooms = rooms ;
    },
    // set single room 
    setSingleRoom( state, singleRoom ){
        state.singleRoom = singleRoom
    },
    // room messages 
    setRoomMessages( state, messages  ){
      
        state.messages = messages ;
    },
  },
  actions: {
    // get chat rooms rooms 
    getchatRooms( {commit} ){
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        return axios.get('get-rooms', {headers})
        .then( (res)=>{
          const response = res.data.data.rooms;
          commit('setChatRooms', response);
        } )
      },
      // get single room members 
      getSingleRoom( {commit} , room_id){
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        return axios.get(`room-members/${room_id}`, {headers})
        .then( (res)=>{
          const responseUSer= Object.values(res.data.data)[0];
          commit('setSingleRoom', responseUSer);
        } )
      },
      // get single chat messages 
      getSingleRoomMessages({commit}, {roomId, page}){
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        return axios.get(`get-room-messages/${roomId}?page=${page}`, {headers})
        .then( (res)=>{

          const response= res.data.data.messages;
          commit('setRoomMessages', response);
        } )
      },
  },
  modules: {
    auth,
    common,
    setting,
    logic
  }
})