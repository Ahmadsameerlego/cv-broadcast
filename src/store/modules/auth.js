import axios from "axios"
export default{
    namespaced: true,
    state : {
        user : {},
        token : ""
    },
    getters:{
    },
    mutations:{  
        SET_USER(state, user){
            state.user = user;
        },
        SET_TOKEN(state, token){
            state.token = token ;
        }
    },
    actions:{
        // register 
         register(context,formData){
            return axios.post('user/register', formData)
            .then( (res)=>{
                if( res.data.key === "success" ){
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    // localStorage.setItem('token', res.data.data.token);
                    return { success : true , message : res.data.msg , data : res.data.data}
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )
        } ,
        // active account 
        active( {commit}, formData ){
            return axios.post('user/activate', formData)
            .then( (res)=>{
                if( res.data.key === "success" ){
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    localStorage.setItem('token', JSON.stringify(res.data.data.token));
                    commit('SET_USER', JSON.stringify(res.data.data))
                    commit('SET_TOKEN', JSON.stringify(res.data.data.token))
                    return { success : true , message : res.data.msg , data : res.data.data }
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )
        },
        // resend code 
        resend(context, formData){
            return axios.post('user/code/resend', formData)
            .then( (res)=>{
                if( res.data.key === "success" ){
                    
                    
                    return { success : true , message : res.data.msg }
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )
        },
        // complete profile 
        completeProfile( context, formData ){
            const token = localStorage.getItem('token') ;
            // const token = JSON.parse(localStorage.getItem('user'))[0].token;
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            return axios.post('user/profile/update', formData, {headers})
            .then( (res)=>{
                if( res.data.key === "success" ){
                    // localStorage.setItem('profile', JSON.stringify(res.data.data[0]));
                    localStorage.setItem('user', JSON.stringify(res.data.data[0]));
                    return { success : true , message : res.data.msg }
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )

        },
        // complete profile 
        login( context, formData ){
            
            return axios.post('user/login', formData, )
            .then( (res)=>{
                if( res.data.key === "success" ){
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    // localStorage.setItem('user_data', JSON.stringify(res.data.data));
                    localStorage.setItem('token', res.data.data.token);
                    localStorage.setItem('isAuthed', true);
                    return { success : true , message : res.data.msg , data : res.data.data}
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )

        },
        // fotget password send phone
        forgetPass( context , formData ){
            return axios.post('user/forget-password-send-code', formData )
            .then( (res)=>{
                if( res.data.key === "success" ){
                    return { success : true , message : res.data.msg }
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )
        },
        // fotget password send phone
        forgetCode( context , formData ){
            return axios.post('user/forget-password-check-code', formData )
            .then( (res)=>{
                if( res.data.key === "success" ){
                    return { success : true , message : res.data.msg }
                }else{
                    return { success : false , message : res.data.msg }
                }
            } )
        },
        // reset Password 
        resetPassword( context , formData ){
            return axios.post('user/reset-password', formData )
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