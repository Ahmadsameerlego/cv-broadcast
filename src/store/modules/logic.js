import axios from "axios";
export default{
    namespaced : true,
    state : {
        ads : []
    },
    getters : {
        ads : state => state.ads ,
    },
    mutations : {
        // set ads 
        SET_ADS( state, ads ){
            state.ads = ads ;
        }
    },
    actions : {
        // search advertisements 
        search( {commit}, formData){
            return axios.post('user/advertisements/search', formData )
            .then( (res)=>{
                if( res.data.key === "success" ){
                    commit('SET_ADS', res.data.data);
                    return { success : true , message : res.data.msg }
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )
        },
        // send compaint 
        sendCompaint( context, formData ){
            return axios.post('new-complaint', formData )
            .then( (res)=>{
                if( res.data.key === "success" ){
                    return { success : true , message : res.data.msg }
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )
        }
    }
}