<template>
    <!-- header  -->
    <siteHeaderVue />

    <!-- explore  -->
    <exploreComponentVue  data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="ease-out-cubic" />
    
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import exploreComponentVue from '@/components/site/jobs/exploreComponent.vue';
import AOS from "aos";

export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        exploreComponentVue
    },
    mounted(){
        AOS.init();
    }
}
</script>

<style>

</style>