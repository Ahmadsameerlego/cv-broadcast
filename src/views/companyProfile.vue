<template>
    <!-- header  -->
    <siteHeaderVue />
    <!-- company details  -->
    <companyDetails />
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import companyDetails from '@/components/site/company/companyDetails.vue';

export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        companyDetails
    }
}
</script>

<style>

</style>