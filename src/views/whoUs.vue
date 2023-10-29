<template>
    <!-- header  -->
    <siteHeaderVue /> 
    <!-- bread-crumb -->
    <div class="breadcrumb d-flex externalBreadcrumb mb-0 mt-5">
        <router-link to="/" class="inActive"> {{  $t('nav.main')  }} </router-link>&nbsp; - &nbsp;
        <p class="active mainColor"> {{  $t('nav.whoUs')  }}  </p>
    </div>
    <!-- terms and condition  -->
    <section class="mt-3 mb-3" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-out-cubic" >
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-12">
                    <h5 class="fw-bold red mb-3">
                        {{  $t('nav.whoUs')  }}
                    </h5>
                    <p>
                        <span class="m-end-5">-</span>
                        <span v-html="about">  </span>
                    </p>
                    
                </div>
            </div>
        </div>
    </section>


    <!-- terms and condition  -->

    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import AOS from "aos";
import {mapGetters , mapActions} from 'vuex';

export default {
    components: {
        siteHeaderVue,
        siteFooterVue,

    },
    data() {
        return {
        }
    },
    computed:{
        ...mapGetters('setting',['about'])
    },
    methods:{
        ...mapActions('setting',['getAbout']),
    },
    mounted(){
        AOS.init();
        this.getAbout();
    }
}
</script>

<style></style>