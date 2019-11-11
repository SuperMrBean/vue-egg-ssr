<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div class="wrap wow fadeIn">
    <div class="left">
      <img :src="detail.imgSrc" class="pic" alt="">
    </div>
    <div class="right">
      <div class="title">{{ detail.title }}</div>
      <div class="date">{{ new Date(detail.update_time).toLocaleString() }}</div>
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
  background: #f2f2f2;
  padding: 20px;
  margin-top: 30px;
  font-size: 0;
  .left {
    display: inline-block;
    width: 25%;
    .pic {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
    }
  }
  .right {
    display: inline-block;
    width: 73%;
    margin-left: 2%;
    vertical-align: top;
    .title {
      font-size: 18px;
      color: #333;
      margin-top: 10px;
    }
    .date {
      font-size: 14px;
      color: #999;
      margin-top: 10px;
    }
    .summary {
      display: block; /* Fallback for non-webkit */
      display: -webkit-box;
      margin-top: 15px;
      font-size: 14px;
      color: #999;
      line-height: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
