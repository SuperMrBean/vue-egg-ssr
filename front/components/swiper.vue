<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div 
    v-swiper:mySwiper="swiperOption" >
    <div class="swiper-wrapper">
      <div 
        v-for="(banner,index) in banners" 
        :key="index"
        class="swiper-slide">
        <img 
          :src="banner" 
          class="pic">
      </div>
    </div>
    <div class="swiper-pagination"/>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        effect: 'coverflow'
        // some swiper options...
      }
    }
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.pic {
  height: 400px;
  width: 100%;
  object-fit: cover;
  vertical-align: top;
}
</style>
