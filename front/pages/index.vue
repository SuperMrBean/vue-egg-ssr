<template>
  <div class="container">
    <Swiper :banners="banners"/>
    <div class="main">
      <div class="service">
        <Title :title="service.title"/>
        <div class="list">
          <ServiceListItem 
            v-for="(item,index) in service.list" 
            :key="index" 
            :detail="item"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import Title from '@/components/Title'
import ServiceListItem from '@/components/ServiceListItem'
export default {
  components: {
    Swiper,
    Title,
    ServiceListItem
  },
  data() {
    return {
      banners: [
        'http://pzertgfup.bkt.clouddn.com/banner1.jpg',
        'http://pzertgfup.bkt.clouddn.com/banner2.jpg',
        'http://pzertgfup.bkt.clouddn.com/banner3.jpg'
      ],
      service: {
        title: {
          ch: '业务范围',
          en: '/Service'
        },
        list: [
          {
            chTitle: '环保验收监测报告',
            enTitle: 'Acceptance Report',
            class: '废水、废气、噪音处理'
          },
          {
            chTitle: '环保验收监测报告',
            enTitle: 'Acceptance Report',
            class: '废水、废气、噪音处理'
          },
          {
            chTitle: '环保验收监测报告',
            enTitle: 'Acceptance Report',
            class: '废水、废气、噪音处理'
          },
          {
            chTitle: '环保验收监测报告',
            enTitle: 'Acceptance Report',
            class: '废水、废气、噪音处理'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding-top: 86px;
  font-size: 16px;
  .main {
    margin: 0 auto;
    .service {
      padding: 0 5%;
      background: #f2f2f2;
      .list {
        font-size: 0;
      }
    }
  }
}
</style>
