<template>
  <div class="container">
    <div class="nav">
      <div class="list">
        <div class="item">首页</div>
        <div class="item">产品中心</div>
        <div class="item">区块链</div>
        <div class="item">广告服务</div>
        <div class="item">开放能力</div>
        <div class="item">关于我们</div>
        <div class="item">投资者关系</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 64px;
  width: 100%;
  transition: all 0.5s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .nav {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    .list {
      font-size: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #fff;
        height: 64px;
        margin: 0 20px;
        transition: all 0.5s ease;
        &:after {
          background: #fff;
          display: block;
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
      }
    }
  }
}
</style>
