<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div :id="title.ch" class="title">
    <span class="title--ch">{{ title.ch }}</span>
    <span class="title--en">/{{ title.en }}</span>
    <span class="title--all" @click="jumpList(title.en)">查看全部></span>
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
  mounted() {},
  methods: {
    jumpList(type) {
      this.$router.push({
        name: 'list',
        query: { type: type.toLowerCase() }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  width: 100%;
  padding: 90px 0 50px 0;
  .title--ch {
    font-size: 24px;
    color: #333;
    font-weight: 400;
  }
  .title--en {
    font-size: 12px;
    color: #999;
  }
  .title--all {
    cursor: pointer;
    font-size: 14px;
    color: @main;
    float: right;
    line-height: 2;
    text-decoration: none;
  }
}
</style>
