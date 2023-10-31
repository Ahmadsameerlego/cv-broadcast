<template>
  <section id="partners" class="mt-5">
    <div class="container">
        <h5 class="site_title fw-bold text-center"> {{  $t('home.part')  }} </h5>

        <swiper
        :slides-per-view="6"
          :space-between="20"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
            :modules="modules"
        >
          <swiper-slide v-for="slide in partners" :key="slide.image">
            <img :src="slide.image" alt="partners image">
          </swiper-slide>
          
        </swiper>
    </div>
  </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper';


  // Import Swiper styles
  import 'swiper/css';

import { mapGetters , mapActions } from 'vuex';
export default {
  components:{
      Swiper,
      SwiperSlide,
  },
  computed:{
    ...mapGetters('setting', ['partners'])
  },
  methods:{
    ...mapActions('setting', ['getParteners'])
  },
  mounted(){
    this.getParteners()
  },
  setup() {
    
    return {
      modules: [Autoplay],
    };
  },

}
</script>

<style>
  .swiper-slide img{
    max-width: 200px;
  }
</style>