<template>
    <!-- header  -->
    <siteHeaderVue />
    <!-- orders  -->
    <profileOrdersVue data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="ease-out-cubic" />
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import profileOrdersVue from '@/components/site/orders/profileOrders.vue';
import AOS from "aos";

export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        profileOrdersVue
    },
    mounted(){
        AOS.init();
    }
}
</script>

<style>

</style>