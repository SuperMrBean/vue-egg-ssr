<template>
  <div class="container">
    <div class="title">全部文章</div>
    <div class="list">
      <div v-for="(item,index) in navList" :key="index" :class="{'active':item.active}" class="item" @click="onSelect(item.index)">{{ item.name }}</div>
    </div>
    <div class="main">
      <ListItem v-for="(item,index) in list" :key="index" :detail="item"/>
      <div class="pagination">
        <el-pagination :total="1000" background layout="prev, pager, next"/>
      </div>
    </div>

  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
  components: { ListItem },
  asyncData({ query }) {},
  data() {
    return {
      navList: [
        { index: 0, name: '全部', type: 'all', active: false },
        { index: 1, name: '业务范围', type: 'service', active: false },
        { index: 2, name: '项目案例', type: 'project', active: false },
        { index: 3, name: '咨询中心', type: 'consult', active: false }
      ],
      list: [
        {
          title: '袋式除尘器与粉尘浓度有什么关系？',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        },
        {
          title: '袋式除尘器与粉尘浓度有什么关系？',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        },
        {
          title: '袋式除尘器与粉尘浓度有什么关系？',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        },
        {
          title: '袋式除尘器与粉尘浓度有什么关系？',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        },
        {
          title: '袋式除尘器与粉尘浓度有什么关系？',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        }
      ]
    }
  },
  mounted() {
    if (this.$route.query.type) {
      let index = this.navList.findIndex(item => {
        return item.type === this.$route.query.type
      })
      this.navList[index].active = true
    } else {
      this.navList[0].active = true
    }
  },
  methods: {
    onSelect(index) {
      this.navList.forEach(item => {
        item.active = false
      })
      this.navList[index].active = true
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 5%;
  padding-top: 86px;
  .title {
    font-size: 26px;
    color: #666;
    padding: 30px 0;
  }
  .list {
    .item {
      margin: 0 10px;
      padding: 6px 20px;
      font-size: 16px;
      color: #666;
      display: inline-block;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.5s ease-out;
    }
    .active {
      background: @main;
      color: #fff;
    }
  }
  .main {
    .pagination {
      padding: 20px 0;
      text-align: center;
    }
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: @main;
    }
  }
}
</style>
