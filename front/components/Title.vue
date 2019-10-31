<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div class="title">
    <span class="title--ch">{{ title.ch }}</span>
    <span class="title--en">{{ title.en }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
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
.title {
  width: 100%;
  padding: 20px 0;
  .title--ch {
    font-size: 24px;
    color: #333;
    font-weight: 400;
  }
  .title--en {
    font-size: 12px;
    color: #999;
  }
}
</style>
