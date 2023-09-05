<template>
    <section id="downloadApp" class="mt-5">
        <div class="container">
            <div class="row">

                <div class="col-md-6 mb-2">
                    <h4 class="whiteColor mt-5">{{ settings.download_app_en }}  </h4>
                    <p class="whiteColor down_desc"> 
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة 
                    </p>

                    <div class="d-flex mt-5" >
                        <a  :href="settings.google_play_link" class="downloadIcon" target="_blank" >
                            <img :src="require('@/assets/imgs/googlePlay.png')" alt="">
                        </a>
                        <a   :href="settings.app_store_link" class="downloadIcon mx-3" target="_blank"> 
                            <img :src="require('@/assets/imgs/appStore.png')" alt="">
                        </a>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="downloadImage">
                        <!-- <img class="w-100 h-100" :src="require('@/assets/imgs/half_back.png')" alt=""> -->
                        <img class="w-100 h-100" :src="settings.download_app_image" alt="">
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        settings() {
            return this.$store.state.settings;
        }
    },
    created() {
        this.$store.dispatch('getSettings');
    }
}
</script>


<style lang="scss">
    #downloadApp{
        background: linear-gradient(225deg, #293255 0%, #475487 21.95%, #546099 71.09%, #293255 100%);
        .downloadIcon{
            width: 170px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .down_desc{
            line-height: 2;
            font-size: 15px;
            margin-top: 8px;
        }
    }
</style>