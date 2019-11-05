<template>
  <div id="联系我们" class="footer wow fadeInUp">
    <div class="top">
      <div class="item">
        <div class="line small">联系我们/CONTACT</div>
        <div>
          <img class="icon" src="@/assets/image/footer1.png" alt="">
          <img class="icon" src="@/assets/image/footer2.png" alt="">
          <img class="icon" src="@/assets/image/footer3.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="line big">广州聚渌创环保咨询有限公司</div>
        <div class="line small">13682200398</div>
        <div class="line small">广州市从化区城郊街河滨北路128号第六层之二</div>
      </div>
      <div class="item">
        <div class="line small">汤经理</div>
        <div class="line small">020-247 5237 84</div>
        <div class="line small">247523784@qq.com</div>
      </div>
    </div>
    <div class="bottom">copyright©2017广州市聚渌创环保咨询有限公司 粤ICP17xxxx号</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.footer {
  box-sizing: border-box;
  width: 100%;
  background: #333;
  color: #aaa;
  padding: 2% 6%;
  .top {
    display: flex;
    justify-content: space-around;
    .item {
      width: 30%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .icon {
        cursor: pointer;
        padding: 0 10px;
      }
      .line {
        text-align: center;
        padding: 5% 0;
      }
      .big {
        font-size: 20px;
      }
      .small {
        font-size: 14px;
      }
    }
  }
  .bottom {
    margin-top: 2%;
    text-align: center;
  }
}
</style>
