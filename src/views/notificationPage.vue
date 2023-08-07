<template>
    <siteHeaderVue />
    <!-- notification  -->
       <notificationVue />
       <notificationVue />
       <notificationVue />
       <notificationVue />
       <notificationVue />

    <!-- notification  -->
    <siteFooterVue />
   
</template>
<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import notificationVue from '@/components/site/notification/notificationBox.vue';

export default {
    components: {
        siteHeaderVue,
        siteFooterVue,
        notificationVue

    },
}

</script>