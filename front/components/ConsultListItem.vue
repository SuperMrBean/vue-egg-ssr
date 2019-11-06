<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div :class="{'fadeInLeft':index%2 === 0,'fadeInRight':index%2 === 1}" class="wrap wow">
    <div class="left">
      <img :src="detail.imgSrc" class="pic">
    </div>
    <div class="right">
      <div class="topic">{{ detail.title }}</div>
      <div class="date">{{ detail.date }}</div>
      <div class="summary">{{ detail.summary }}</div>
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
  mounted() {}
}
</script>
<style lang="less" scoped>
.wrap {
  display: inline-flex;
  width: 48%;
  font-size: 0px;
  margin-right: 4%;
  margin-bottom: 40px;
  &:nth-child(2n) {
    margin-right: 0;
  }
  .left {
    width: 55%;
    display: inline-block;
    .pic {
      width: 100%;
    }
  }
  .right {
    font-size: 16px;
    width: 45%;
    display: inline-block;
    padding: 3%;
    .topic {
      color: #333;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .date {
      font-size: 12px;
      color: #999;
      padding-top: 8px;
      padding-bottom: 16px;
      border-bottom: 1px solid #ccc;
    }
    .summary {
      display: block; /* Fallback for non-webkit */
      display: -webkit-box;
      font-size: 12px;
      color: #999;
      width: 100%;
      max-height: 80px;
      padding-top: 16px;
      line-height: 20px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .text {
    .text__top {
      padding: 10px 0;
      text-align: center;
      .text__top--title {
        font-size: 18px;
        color: #333;
      }
      .text__top--en {
        font-size: 12px;
        color: #999;
      }
    }
    .text__bottom {
      text-align: center;
      &--name {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
