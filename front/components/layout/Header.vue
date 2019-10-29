<template>
  <div class="container">
    <div class="nav">
      <div class="list">
        <div class="item">首页</div>
        <div class="item">关于我们</div>
        <div class="item">特色</div>
        <div class="item">课程</div>
        <div class="item">员工</div>
      </div>
      <div class="list_logo">
        <div class="item">
          <img 
            class="logo" 
            src="@/assets/image/logo.png">
        </div>
      </div>
      <div class="list">
        <div class="item">社区</div>
        <div class="item">招生部</div>
        <div class="item">联系我们</div>
        <div class="item">新闻</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  top: 90px;
  height: 50px;
  width: 100%;
  .nav {
    margin: 0 auto;
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: center;
    background-image: url(~assets/image/nav_back.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    .list {
      flex: 1;
      font-size: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #dcbb71;
        height: 50px;
        padding: 0 20px;
        transition: all 0.5s ease;
        position: relative;
        &:hover {
          color: #fff;
        }
        &::after {
          background: #fff;
          opacity: 0;
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          bottom: 0;
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
