<template>
    <!-- header  -->
    <siteHeaderVue />
    <!-- contact form  -->
    <contactFormVue />
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import contactFormVue from '@/components/site/contact/contactForm.vue'
export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        contactFormVue
    }
}
</script>

<style>

</style>