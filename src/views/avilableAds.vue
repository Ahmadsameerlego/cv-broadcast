<template>
    <!-- header  -->
    <siteHeaderVue />
    <!-- all ads  -->
    <allAds />
    <!-- footer  -->
    <siteFooterVue />

</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import allAds from '@/components/site/jobs/allAvilableAds.vue'
import siteFooterVue from '@/components/site/layout/siteFooter.vue';

export default {
    components:{
        siteHeaderVue,
        allAds ,
        siteFooterVue
    }
}
</script>

<style>

</style>