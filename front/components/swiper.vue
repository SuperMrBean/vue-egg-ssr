<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div 
    v-swiper:mySwiper="swiperOption" >
    <div class="swiper-wrapper">
      <div 
        v-for="(banner,index) in banners" 
        :key="index"
        class="swiper-slide">
        <img :src="banner">
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
        'http://pzertgfup.bkt.clouddn.com/banner1.png',
        'http://pzertgfup.bkt.clouddn.com/banner2.png',
        'http://pzertgfup.bkt.clouddn.com/banner3.png',
        'http://pzertgfup.bkt.clouddn.com/banner4.png'
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        speed: 1000
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
