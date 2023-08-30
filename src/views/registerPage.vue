<template>
    <!-- header  -->
    <siteHeaderVue />

    <!-- login  -->
    <loginVue  data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="ease-out-cubic" />
    
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import loginVue from '@/components/site/auth/registerComponent.vue'
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import AOS from "aos";

export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        loginVue
    },
    mounted(){
        AOS.init();
    }
}
</script>

<style>

</style>