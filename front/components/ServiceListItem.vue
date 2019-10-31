<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div class="wrap wow fadeInUp">
    <img 
      src="http://pzertgfup.bkt.clouddn.com/banner1.png" 
      alt=""
      class="pic">
    <div class="text">
      <div class="text__top">
        <span class="text__top--ch">{{ detail.chTitle }}</span>
        <span class="text__top--en">{{ detail.enTitle }}</span>
      </div>
      <div class="text__bottom">
        <span class="text__bottom--ch">{{ detail.class }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.wrap {
  display: inline-block;
  width: 30%;
  font-size: 16px;
  margin-right: 5%;
  margin-bottom: 40px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  .pic {
    width: 100%;
    border-radius: 8px;
  }
  .text {
    .text__top {
      padding: 10px 0;
      border-bottom: 1px solid #999;
      .text__top--ch {
        font-size: 18px;
        color: #333;
      }
      .text__top--en {
        font-size: 12px;
        color: #999;
      }
    }
    .text__bottom {
      padding: 10px 0;
      &--ch {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
