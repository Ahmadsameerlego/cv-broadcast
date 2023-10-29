<template>
    <section id="jobs" class="mt-4" v-if="ads.length>0">
        <div class="container">
            <h5 class="fw-bold red mb-4 mt-3"> {{  ads.length  }} {{ $t('common.avilabe') }} </h5>
            <section class="cards">

                <div class="row" >
                    <div class="col-md-6 mb-3" v-for="ad in ads.slice(0,6)" :key="ad.id">
                        <singleJobCardVue :ad="ad" />
                    </div>
                </div>

                
            </section>
        </div>
        <!-- show all  -->
        <div class="flex_center">
            <router-link to="/allAds" class="main_btn px-5 pt-3 pb-3 br-50px">
                {{ $t('common.showAll') }}
            </router-link>
        </div>
    </section>
    <!-- not found -->
    <section v-else-if="ads.length==0" class="w-50 mx-auto">
        <Message severity="error">
                {{ $t('common.noJobs') }}
        </Message>
    </section>
</template>

<script>
import singleJobCardVue from '@/components/site/jobs/singleJobCard.vue';
import Message from 'primevue/message';
import axios from 'axios';
export default {
    data(){
        return{
            ads : []
        }
    }, 
    methods:{
        async getAllAds(){
            const token = localStorage.getItem('token') ;
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.post('user/advertisements', {headers})
            .then( (res)=>{
                this.ads = res.data.data ;
            } )
        }
    } ,
    components:{
        singleJobCardVue,
        Message
    },
    mounted(){
        this.getAllAds();
    }
}
</script>

<style>

</style>