import axios from "axios";
export default{
    namespaced : true,
    state : {
        terms : null,
        about : null,
        privacy : null,
        top : null,
        settings : null,
        site_intro_img : '',
        services : [],
        vision : '',
        app_store_link : '',
        google_play_link : '',
        download_app_ar : '',
        partners : [],
        footer_description_ar : '',
        socials : []
    },
    getters : {
        terms : state => state.terms,
        about : state => state.about,
        privacy : state => state.privacy,
        top : state => state.top ,
        settings : state => state.settings ,
        site_intro_img : state => state.site_intro_img ,
        services : state => state.services  ,
        vision : state => state.vision  ,
        app_store_link : state => state.app_store_link  ,
        google_play_link : state => state.google_play_link  ,
        download_app_ar : state => state.download_app_ar  ,
        download_app_image : state => state.download_app_image  ,
        partners : state => state.partners  ,
        footer_description_ar : state => state.footer_description_ar  ,
        socials : state => state.socials  ,
    },
    mutations : {
        // set terms 
        SET_TERMS( state , terms ){
            state.terms = terms ;
        },
        // set about us 
        SET_ABOUT( state , about ){
            state.about = about ;
        },
        // set privacy 
        SET_PRIVACY( state, privacy ){
            state.privacy = privacy ;
        },
        // set top section 
        SET_TOP_SECTION( state , top ){
            state.top = top ;
        },
        // set settings 
        SET_SETTINGS( state, settings ){
            state.settings = settings ;
            state.site_intro_img = settings.website_intro_image ;
            state.google_play_link = settings.google_play_link ;
            state.app_store_link = settings.app_store_link ;
            state.download_app_ar = settings.download_app_ar ;
            state.download_app_image = settings.download_app_image ;
            state.footer_description_ar = settings.footer_description_ar ;
        },
        // set services 
        SET_SERVICES( state , services ){
            state.services = services ;
        },
        SET_VISION( state , vision ){
            state.vision = vision ;
        },
        SET_PARTNERS( state , partners ){
            state.partners = partners ;
        },
        SET_SOCIALS( state , socials ){
            state.socials = socials ;
        }
    },
    actions : {
        // get terms 
        getTerms({commit} ){
            return axios.get('terms')
            .then( (res)=>{
                const response  = res.data.data ;
                commit('SET_TERMS', response)
            } )
        },
        // get whous 
        getAbout({commit} ){
            return axios.get('about')
            .then( (res)=>{
                const response  = res.data.data ;
                commit('SET_ABOUT', response)
            } )
        },
        // get privacy 
        getPrivacy({commit} ){
            return axios.get('privacy')
            .then( (res)=>{
                const response  = res.data.data ;
                commit('SET_PRIVACY', response)
            } )
        },
        // get top section 
        getTopSection( { commit } ){
            return axios.get('top-section')
            .then( (res)=>{
                const response  = res.data.data ;
                commit('SET_TOP_SECTION', response)
            } )
        },
        // get settings 
        getSettings( {commit} ){
            return axios.get('settings')
            .then( (res) =>{
                const response = res.data.data ;
                commit( 'SET_SETTINGS', response );
            })
        },
        // get services 
        getServices( {commit} ){
            return axios.get('services')
            .then( (res)=>{
                const response = res.data.data ;
                commit( 'SET_SERVICES', response );
            } )
        },
        // get visions 
        getVisions( {commit} ){
            return axios.get('our-vision')
            .then( (res)=>{
                const response = res.data.data ;
                commit( 'SET_VISION', response );
            } )
        },
        // get parteners 
        getParteners( {commit} ){
            return axios.get('partners')
            .then( (res)=>{
                const response = res.data.data ;
                commit( 'SET_PARTNERS', response );
            } )
        },
        // get socials 
        getSocials( {commit} ){
            return axios.get('socials')
            .then( (res)=>{
                const response = res.data.data ;
                commit( 'SET_SOCIALS', response );
            } )
        }
    }
}