<template>
    <!-- header  -->
    <siteHeaderVue />

    <!-- explore  -->
    <exploreComponentVue />
    
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import exploreComponentVue from '@/components/site/orders/applicationComp.vue';
export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        exploreComponentVue
    }
}
</script>

<style>

</style>