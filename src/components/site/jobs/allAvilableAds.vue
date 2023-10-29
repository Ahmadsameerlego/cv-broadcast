<template>
    <section id="jobs" class="mt-4" v-if="ads">
        <div class="container">
            <h5 class="fw-bold red mb-4 mt-3"> {{  ads.length  }} {{ $t('common.avilabe') }} </h5>
            <section class="cards">

                <div class="row" v-if="load">
                    <div class="col-md-6 mb-3" v-for="ad in ads" :key="ad.id">
                        <singleJobCardVue :ad="ad" />
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-md-6 mb-3" v-for="skeleton in 2" :key="skeleton">
                        <Skeleton style="width:100%" height="4rem"></Skeleton>
                    </div>
                </div>

                
            </section>
        </div>
       
    </section>
    <!-- not found -->
    <section v-if="adsLength" class="w-50 mx-auto">
        <Message severity="error">
            {{ $t('common.noJobs') }}
        </Message>
    </section>
</template>

<script>
import singleJobCardVue from '@/components/site/jobs/singleJobCard.vue';
import Message from 'primevue/message';
import Skeleton from 'primevue/skeleton';

import axios from 'axios';
export default {
    data(){
        return{
            ads : [],
            load : false,
            adsLength : false
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
                this.load = true ;
                if( res.data.data.length == 0 ){
                    this.adsLength = true;
                }else{
                    this.adsLength = false;
                }
            } )
        }
    } ,
    components:{
        singleJobCardVue,
        Message,
        Skeleton
    },
    mounted(){
        this.getAllAds();
    }
}
</script>

<style>

</style>