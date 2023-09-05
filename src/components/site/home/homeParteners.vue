<template>
  <section id="partners" class="mt-5">
    <div class="container">
        <h5 class="site_title fw-bold text-center"> شركاء النجاح </h5>

        <swiper
          class="mt-5"
          :slides-per-view="6"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="partner in partners" :key="partner.id">
            <!-- <img :src="require('@/assets/imgs/total-logo.png')" alt=""> -->
            <img :src="partner.image" alt="">

          </swiper-slide>
          <!-- <swiper-slide>
                        <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>
          <swiper-slide>
                        <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide> -->
        </swiper>
    </div>
  </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

export default {
  components:{
      Swiper,
      SwiperSlide,
  },
    setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
    computed: {
        partners() {
            return this.$store.state.partners;
        }
    },
    created() {
        this.$store.dispatch('partners');
    }

}
</script>

<style>
  .swiper-slide img{
    max-width: 200px;
  }
</style>