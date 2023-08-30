<template>
    <!-- header  -->
    <siteHeaderVue />
    <!-- bread-crumb -->
    <div class="breadcrumb d-flex externalBreadcrumb mb-0">
        <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; - &nbsp;
        <p class="active mainColor">   {{ whoAreWeTitle }} </p>
    </div>
    <!-- terms and condition  -->
    <section class="mt-3 mb-3" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-out-cubic" >
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-12">
                    <h5 class="fw-bold red mb-3">
                        {{ whoAreWeTitle }}
                    </h5>
                    <p>
                        <span class="m-end-5">-</span>
                        <span>{{ termsConditionContent }}</span>
                    </p>
                    <p>
                        <span class="m-end-5">-</span>
                        <span>{{ termsConditionContent }}</span>
                    </p>
                    <p>
                        <span class="m-end-5">-</span>
                        <span>{{ termsConditionContent }}</span>
                    </p>
                    <p>
                        <span class="m-end-5">-</span>
                        <span>{{ termsConditionContent }}</span>
                    </p>
                    <p>
                        <span class="m-end-5">-</span>
                        <span>{{ termsConditionContent }}</span>
                    </p>
                    <p>
                        <span class="m-end-5">-</span>
                        <span>{{ termsConditionContent }}</span>
                    </p>
                    <p>
                        <span class="m-end-5">-</span>
                        <span>{{ termsConditionContent }}</span>
                    </p>
                </div>
            </div>
        </div>
    </section>


    <!-- terms and condition  -->

    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import AOS from "aos";

export default {
    components: {
        siteHeaderVue,
        siteFooterVue,

    },
    data() {
        return {
            whoAreWeTitle: ' من نحن',
            termsConditionContent: 'نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص '
        }
    },
    mounted(){
        AOS.init();
    }
}
</script>

<style></style>