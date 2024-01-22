import axios from "axios";
export default{
    namespaced : true,
    state : {
        countries : [],
        nationalities : [],
        cities : [],
        qualifications : [],
        emps : [],
        specs : [],
        certifications : [],
        skills : [],
        experiences : [],
        types : []
    },
    getters : {
        countries :state => state.countries ,
        nationalities : state => state.nationalities,
        cities : state => state.cities,
        qualifications : state => state.qualifications,
        emps : state => state.emps,
        specs : state => state.specs ,
        certifications : state => state.certifications ,
        skills : state => state.skills ,
        experiences : state => state.experiences ,
        types : state => state.types ,
    },
    mutations : {
        UPDATE_SPEC( state , specs ){
            state.specs = specs ;
        },
        // UPDATE_EMPLOYMENTS( state , emps ){
        //     state.emps = emps ;
        // },

        // set countries 
        SET_COUNTRIES(state, countries){
            state.countries = countries
        },
        // set nations 
        SET_NATIONS(state, nations){
            state.nationalities = nations ;
        },
        SET_CITIES(state, cities){
            state.cities = cities ;
        },
        SET_QUAL(state, qualifications){
            state.qualifications = qualifications ;
        },
        UPDATE_QUAL(state , updatedQualification){
            state.qualifications = updatedQualification ;
        },
        SET_EMP( state, emps ){
            state.emps = emps
        },
        SET_SPEC(state, specs){
            state.specs = specs
        },
        SET_CER( state, certifications ){
            state.certifications = certifications ;
        },
        SET_SKILLS( state, skills ){
            state.skills = skills ;
        },
        SET_EXPERIENCE( state, experiences ){
            state.experiences = experiences ;
        },
        SET_TYPES( state, types ){
            state.types = types ;
        }
    },
    actions : {
        // get countries and countries keys 
        async getCountries({commit}){
            return axios.get('countries')
            .then((res)=>{
                const response = res.data.data ;
                commit('SET_COUNTRIES', response)
            })
        },
        // get nationalities 
        getNations( {commit} ){
            return axios.get('nationalities')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_NATIONS', response)
            })
        },
        // get cities 
        getCities( {commit} ){
            return axios.get('cities')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_CITIES', response)
            })
        },
        // get qualifications 
        getQualifications({commit}){
            return axios.get('qualifications')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_QUAL', response)
            })
        },
        // update qualifications by emps 
        updayeQualificationFromEmps( { commit } ,empId){
            return axios.get(`user/employment/${empId}/qualifications`)
            .then( (res)=>{
                const response = res.data.data ;
                commit('UPDATE_QUAL', response);
            } )
        },
        // update qualifications by specs 
        updayeQualificationFromSpecs( { commit } ,specID){
            return axios.get(`user/specialization/${specID}/qualifications`)
            .then( (res)=>{
                const response = res.data.data ;
                commit('UPDATE_QUAL', response);
            } )
        },

        updateSpecsAndEmps( {commit} , qualId){
            return axios.get(`user/qualification/${qualId}/specializations`)
            .then( (res)=>{
                const response = res.data.data ;
                commit('UPDATE_SPEC', response)

                // // get employments 
                // return axios.get(`user/qualification/${qualId}/employments`)
                // .then( (res)=>{
                //     const emp_reponse = res.data.data ;
                //     commit('UPDATE_EMPLOYMENTS', emp_reponse)
                // } )
            } )
        },

        // get employments 
        getEmployment( {commit} ){
            return axios.get('employments')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_EMP', response)
            })
        },
        // get specilizations 
        getSpecilizations( {commit} ){
            return axios.get('specializations')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_SPEC', response)
            })
        },
        // get certifications 
        getCertifications( {commit} ){
            return axios.get('certifications')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_CER', response)
            })
        },
        // get skills 
        getSkills( {commit} ){
            return axios.get('skills')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_SKILLS', response)
            })
        },
        // get experiences 
        getExperiences( {commit} ){
            return axios.get('experiences')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_EXPERIENCE', response)
            })
        },
        // get types 
        getTypes({commit}){
            return axios.get('types')
            .then((res)=>{
                const response = res.data.data;
                commit('SET_TYPES', response)
            })
        }
    }
}