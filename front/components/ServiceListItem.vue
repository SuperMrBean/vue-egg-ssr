<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div :class="{'fadeInLeft':index%3 === 0,'fadeIn':index%3 === 1,'fadeInRight':index%3 === 2}" class="wrap wow" @click="onClick(detail)">
    <img 
      :src="detail.imgSrc" 
      alt=""
      class="pic">
    <div class="text">
      <div class="text__top">
        <span class="text__top--ch">{{ detail.title }}</span>
      </div>
      <div class="text__bottom">
        <span class="text__bottom--ch">{{ detail.summary }}</span>
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
    },
    index: {
      required: false,
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    onClick(detail) {
      this.$router.push({
        name: 'article-id',
        query: { id: detail.id, type: detail.type }
      })
    }
  }
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
