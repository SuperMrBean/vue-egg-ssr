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
  data() {
    return {
      banners: [
        'http://pzertgfup.bkt.clouddn.com/banner1.jpg',
        'http://pzertgfup.bkt.clouddn.com/banner2.jpg',
        'http://pzertgfup.bkt.clouddn.com/banner3.jpg'
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          stopOnLastSlide: false
        },
        speed: 1000,
        effect: 'coverflow'
        // some swiper options...
      }
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.banners.push('/4.jpg')
    //   console.log('banners update')
    // }, 3000)
    // console.log(
    //   'This is current swiper instance object',
    //   this.mySwiper,
    //   'It will slideTo banners 3'
    // )
    this.mySwiper.slideTo(0)
  }
}
</script>
<style lang="less" scoped>
.pic {
  height: 400px;
  width: 100%;
  object-fit: cover;
}
</style>
