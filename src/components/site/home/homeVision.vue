<template>
  <section id="vision" class="mt-5">
    <div class="container">
      <h5 class="site_title fw-bold text-center"> رؤيتنا </h5>
      <p class="vision_desc text-center w-75 mx-auto mt-4">
        {{ vision }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {

  },
  methods: {

  },
  computed: {
    vision() {
      return this.$store.state.ourVision;
    }
  },
  created() {
    this.$store.dispatch('getVesion')
  }
}
</script>

<style>
.vision_desc {
  font-size: 16px;
  font-weight: 600;
}
</style>