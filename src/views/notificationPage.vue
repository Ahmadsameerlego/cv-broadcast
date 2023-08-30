<template>
    <siteHeaderVue />
    <!-- notification  -->
       <notificationVue  data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="ease-out-cubic" />

    <!-- notification  -->
    <siteFooterVue />
   
</template>
<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import notificationVue from '@/components/site/notification/notificationBox.vue';
import AOS from "aos";

export default {
    components: {
        siteHeaderVue,
        siteFooterVue,
        notificationVue

    },
    mounted(){
        AOS.init();
    }
}

</script>