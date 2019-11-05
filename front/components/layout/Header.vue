<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <img 
          src="@/assets/image/logo2.png" 
          alt="">
      </div>
      <div v-if="$route.path === '/'" class="list">
        <div 
          v-for="item in navList"
          :key="item.index" 
          :class="{'active':item.active}"
          class="item"
          @click="onChangeNav(item.index,item.name)">{{ item.name }}
        </div>
      </div>
      <div v-if="$route.path !== '/'" class="list">
        <nuxt-link class="item" to="/">
          返回首页
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { index: 0, name: '业务范围', active: true },
        { index: 1, name: '项目案例', active: false },
        { index: 2, name: '关于我们', active: false },
        { index: 3, name: '咨询中心', active: false },
        { index: 4, name: '联系我们', active: false }
      ]
    }
  },
  mounted() {},
  methods: {
    onChangeNav(index, name) {
      this.navList.forEach(item => {
        item.active = false
      })
      this.navList[index].active = true
      document
        .getElementById(name)
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  position: fixed;
  top: 0px;
  height: 86px;
  width: 100%;
  z-index: 999;
  background-color: #f2f2f2;
  .nav {
    margin: 0 auto;
    width: 90%;
    height: 86;
    display: flex;
    justify-content: space-around;
    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .list {
      flex: 1;
      font-size: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #666;
        height: 86px;
        padding: 0 20px;
        transition: all 0.5s ease;
        position: relative;
        box-sizing: border-box;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          color: #00aa00;
        }
        &::after {
          background: #00aa00;
          opacity: 0;
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          bottom: 10px;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transition: all 0.4s ease;
        }
        &:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
      .active {
        color: #00aa00;
      }
    }
    .list_logo {
      position: relative;
      top: 10px;
      flex: 0.2;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .logo {
        width: 80%;
      }
    }
  }
}
</style>
