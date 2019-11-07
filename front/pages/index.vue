<template>
  <div class="container">
    <Swiper :banners="banners"/>
    <div class="main">
      <div class="service">
        <Title :title="{
          ch: '业务范围',
          en: '/Service'
        }"/>
        <div class="list">
          <ServiceListItem v-for="(item,index) in serviceList" :key="index" :detail="item" :index="index"/>
        </div>
      </div>
      <div class="principle wow fadeIn">
        <div class="line1">符合国家和国际法规与标准，高水平的质量控制</div>
        <div class="line2">Meet national and international regulations and standards , high level of quality control</div>
        <div class="line3">一向以诚信为本，这是公司的基本传统，也是完美最可贵的财产之一。访问公司治理部分，这是您了解公司治理实践的可靠信息来源，利用这些实践
        来确保我们所做的一切都维护了公司的卓越声望，作为行业领导者，我们清楚认识到，在重塑对公司的信心的过程中我们有着不可推卸的责任，并且
        我们将自身视为公司治理实践的领导者。</div>
        <div class="line4">
          <div class="item">
            <div>
              <img class="pic" src="@/assets/image/energe.png" alt="">
            </div>
            <div class="text--ch">能源</div>
            <div class="text--en">ENERGE</div>
          </div>
          <div class="item">
            <div>
              <img 
                class="pic" src="@/assets/image/shiming.png" alt="">
            </div>
            <div class="text--ch">使命</div>
            <div class="text--en">MISSION</div>
          </div>
          <div class="item">
            <div>
              <img class="pic" src="@/assets/image/diamon.png" alt="">
            </div>
            <div class="text--ch">价值</div>
            <div class="text--en">VALUE</div>
          </div>
        </div>
      </div>
      <div class="project">
        <Title :title=" {
          ch: '项目案例',
          en: '/Business Case'
        }"/>
        <div class="list">
          <ProjectListItem v-for="(item,index) in projectList" :key="index" :detail="item" :index="index"/>
        </div>
      </div>
      <div id="关于我们" class="principle wow fadeIn">
        <div class="line1">关于我们</div>
        <div class="line2">ABOUT US</div>
        <div class="line3">广州市聚渌创环保咨询有限公司是一家集废气处理、粉尘治理、废水处理、噪音治理工程设备的研发、生产、安装、售后服务为
        一体的综合型环保污染治理高科技。启绿产品适用于家私业、木制品行业、制鞋业、化工业、饲料厂、电子业等各行业环境治理，
        可针对客户的不同需求，设计出让客户满意的环境治理方案，至今已为数百家企业解决了环保污染问题。</div>
        <div class="about">MORE</div>
      </div>
      <img class="ad wow fadeInUp" src="@/assets/image/ad.png" alt="">
      <div class="consult">
        <Title :title="{
          ch: '咨询中心',
          en: '/Consultancy Center'
        }"/>
        <div class="list">
          <ConsultListItem v-for="(item,index) in consultList" :key="index" :detail="item" :index="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import Title from '@/components/Title'
import ServiceListItem from '@/components/ServiceListItem'
import ProjectListItem from '@/components/ProjectListItem'
import ConsultListItem from '@/components/ConsultListItem'
import { getBanner } from '@/utils/api'
export default {
  components: {
    Swiper,
    Title,
    ServiceListItem,
    ProjectListItem,
    ConsultListItem
  },
  data() {
    return {
      banners: [
        'http://pzertgfup.bkt.clouddn.com/banner1.jpg',
        'http://pzertgfup.bkt.clouddn.com/banner2.jpg',
        'http://pzertgfup.bkt.clouddn.com/banner3.jpg'
      ],
      serviceList: [
        {
          id: 1,
          title: '环保验收监测报告',
          date: '2019-09-09',
          summary: '废水、废气、噪音处理',
          class: 'service',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/list_item.png'
        },
        {
          id: 2,
          title: '环保验收监测报告',
          date: '2019-09-09',
          summary: '废水、废气、噪音处理',
          class: 'service',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/list_item.png'
        },
        {
          id: 3,
          title: '环保验收监测报告',
          date: '2019-09-09',
          summary: '废水、废气、噪音处理',
          class: 'service',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/list_item.png'
        }
      ],
      projectList: [
        {
          id: 4,
          title: '可行性研究报告',
          date: '2019-09-09',
          summary: '聚渌创环保咨询有限公司',
          class: 'project',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/project_item.png'
        },
        {
          id: 5,
          title: '可行性研究报告',
          date: '2019-09-09',
          summary: '聚渌创环保咨询有限公司',
          class: 'project',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/project_item.png'
        },
        {
          id: 6,
          title: '可行性研究报告',
          date: '2019-09-09',
          summary: '聚渌创环保咨询有限公司',
          class: 'project',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/project_item.png'
        }
      ],
      consultList: [
        {
          id: 6,
          title: '袋式除尘器与粉尘浓度有什么关系?',
          date: '2019-09-09',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...',
          class: 'consult',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        },
        {
          id: 6,
          title: '袋式除尘器与粉尘浓度有什么关系?',
          date: '2019-09-09',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...',
          class: 'consult',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        },
        {
          id: 6,
          title: '袋式除尘器与粉尘浓度有什么关系?',
          date: '2019-09-09',
          summary:
            '袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...袋式除尘器净化效率高，处理气体能力大，性能稳定，操作方便、滤袋寿命长、维修工作量小等优点。而且从结构上和脉冲阀上进行改革，解决了露天安放...',
          class: 'consult',
          imgSrc: 'http://pzertgfup.bkt.clouddn.com/news1.png'
        }
      ]
    }
  },
  mounted() {
    getBanner()
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
    .principle {
      background: #fff;
      width: 100%;
      padding: 90px 0;
      .line1 {
        font-size: 22px;
        color: #333;
        font-weight: 500;
        text-align: center;
      }
      .line2 {
        font-size: 12px;
        color: #999;
        font-weight: 200;
        text-align: center;
        margin-top: 4px;
      }
      .line3 {
        width: 60%;
        font-size: 12px;
        color: #999;
        font-weight: 200;
        margin: 0 auto;
        margin-top: 20px;
        line-height: 2;
      }
      .line4 {
        display: flex;
        justify-content: center;
        margin-top: 60px;
        .item:nth-child(2) {
          margin: 0 160px;
        }
        .pic {
          width: 59px;
          height: 59px;
        }
        .text--ch {
          font-size: 18px;
          color: #333;
          margin-top: 18px;
          text-align: center;
        }
        .text--en {
          font-size: 10px;
          color: #999;
          text-align: center;
          margin-top: 2px;
        }
      }
      .about {
        width: 150px;
        height: 36px;
        color: #00aa00;
        font-size: 12px;
        border: 1px solid #00aa00;
        margin: 0 auto;
        margin-top: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;
        &:hover {
          color: #fff;
          background: #00aa00;
        }
      }
    }
    .ad {
      width: 100%;
      vertical-align: top;
    }
    .project {
      padding: 0 5%;
      background: #f2f2f2;
      .list {
        font-size: 0;
      }
    }
    .consult {
      padding: 0 5%;
      background: #f2f2f2;
      .list {
        font-size: 0;
      }
    }
  }
}
</style>
