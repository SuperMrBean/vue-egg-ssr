<template>
  <div id="top" class="container">
    <div class="title">全部文章</div>
    <div class="list">
      <div v-for="(item,index) in navList" :key="index" :class="{'active':item.active}" class="item" @click="onSelect(item.index)">{{ item.name }}</div>
    </div>
    <div class="main">
      <ListItem v-for="(item,index) in list" :key="index" :detail="item"/>
      <div class="pagination">
        <el-pagination :total="total" :page-size="5" background layout="prev, pager, next" @current-change="onChangePage"/>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import { getArticleList } from '@/utils/api'
export default {
  components: { ListItem },
  async asyncData({ query }) {
    const {
      data: { list, total }
    } = await getArticleList({
      type: query.type,
      size: 5,
      index: 1
    })
    return {
      list,
      total
    }
  },
  data() {
    return {
      navList: [
        { index: 0, name: '全部', type: 'all', active: false },
        { index: 1, name: '业务范围', type: 'service', active: false },
        { index: 2, name: '项目案例', type: 'project', active: false },
        { index: 3, name: '咨询中心', type: 'consult', active: false }
      ],
      type: null
    }
  },
  mounted() {
    if (this.$route.query.type) {
      let index = this.navList.findIndex(item => {
        return item.type === this.$route.query.type
      })
      this.navList[index].active = true
      this.type = this.navList[index].type
    } else {
      this.navList[0].active = true
      this.type = 'all'
    }
  },
  methods: {
    async onSelect(index) {
      this.navList.forEach(item => {
        item.active = false
      })
      this.navList[index].active = true
      this.type = this.navList[index].type
      this.getList(1)
    },
    onChangePage(index) {
      this.getList(index)
    },
    async getList(index) {
      const {
        data: { list, total }
      } = await getArticleList({
        type: this.type,
        size: 5,
        index
      })
      this.list = list
      this.total = total
      document
        .getElementById('top')
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
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
