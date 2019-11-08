<template>
  <div class="container">
    <div class="topic">
      <span class="topic--ch">{{ titleCh }}</span>
      <span class="topic--en">{{ titleEn }}</span>
    </div>
    <div class="main">
      <div class="title">广州聚渌创环保咨询有限公司可行性研究报告</div>
      <div class="date">2017-04-29</div>
      <div class="article">
        <span>我是一篇文章</span>
        <img src="@/assets/image/ad.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    titleCh(value) {
      switch (this.$route.query.type) {
        case 'service':
          return '业务范围'
        case 'project':
          return '项目案例'
        case 'consult':
          return '咨询中心'
        default:
          return '其他'
      }
    },
    titleEn(value) {
      switch (this.$route.query.type) {
        case 'service':
          return '/Service'
        case 'project':
          return '/Business Case'
        case 'consult':
          return '/Consultancy Center'
        default:
          return '/Other'
      }
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 5%;
  padding-top: 86px;
  .topic {
    padding: 50px 0;
    &--ch {
      font-size: 24px;
      color: #333;
    }
    &--en {
      font-size: 16px;
      color: #999;
    }
  }
  .main {
    margin: 60px 0;
    .title {
      text-align: center;
      font-size: 22px;
      color: #333;
    }
    .date {
      text-align: center;
      margin-top: 16px;
      padding-bottom: 20px;
      font-size: 14px;
      color: #999;
      border-bottom: 1px solid #eee;
    }
    .article {
      text-align: center;
    }
  }
}
</style>
