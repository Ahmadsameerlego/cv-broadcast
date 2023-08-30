<template>
    <!-- header  -->
    <siteHeaderVue />
    <!-- rooms  -->
    <rooms />
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import rooms from '@/components/site/chat/singleChatRoom.vue'
export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        rooms
    }
}
</script>

<style>

</style>