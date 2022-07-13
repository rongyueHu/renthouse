<template>
  <div>
    <!-- 导航栏 小区名称 -->
    <van-nav-bar
      fixed
      @click-left="$router.go(-1)"
      :title="houselist.community"
      left-arrow
    />
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      touchable
    >
      <van-swipe-item v-for="(item, index) in houseImg" :key="index"
        ><img :src="`http://liufusong.top:8080${item}`" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 小区梗概 -->
    <ul class="info">
      <li class="one">
        <p class="p1">{{ houselist.title }}</p>
        <p class="p2">{{ houselist.floor }}</p>
      </li>
      <li class="two">
        <span>
          <h4>{{ houselist.price }}/月</h4>
          <p>租金</p>
        </span>
        <span>
          <h4>{{ houselist.roomType }}</h4>
          <p>房型</p>
        </span>
        <span>
          <h4>{{ houselist.size }}平米</h4>
          <p>面积</p>
        </span>
      </li>
      <li class="three">
        <van-row type="flex" justify="center">
          <van-col span="12"><span>装修：</span>精装</van-col>
          <van-col span="12"><span>朝向：</span>精装</van-col>
          <van-col span="12"><span>楼层：</span>{{ houselist.floor }}</van-col>
          <van-col span="12"><span>类型：</span>精装</van-col>
        </van-row>
      </li>
    </ul>
    <div class="hui"></div>
    <!-- 小区名称 -->
    <p class="name">小区：{{ houselist.community }}</p>
    <!-- 地图区域 -->
    <div class="map"></div>
    <!-- 房屋配套 -->
    <div class="mating">
      <h4>房屋配套</h4>
      <div class="mating-info">
        <ul>
          <li v-for="(item, index) in supporting" :key="index">
            <van-icon name="cart-circle-o" />
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 房源概况 -->
    <div class="survey">
      <h4>房源概况</h4>
      <div class="survey-info">
        <div class="survey-info-up">
          <div class="left">
            <div class="img"><img src="@/assets/mobile.png" alt="" /></div>
            <div class="user">
              <p class="p1">王女士</p>
              <p class="p2">已认证房主</p>
            </div>
          </div>
          <div class="right">
            <van-button plain type="primary">发消息</van-button>
          </div>
        </div>
        <div class="info-h">
          <p>
            {{ houselist.description }}
          </p>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like">
      <h4>猜你喜欢</h4>
      <!-- <div class="house_list">
        <div class="left">
          <img src="@/assets/mobile.png" alt="" />
        </div>
        <div class="right">
          <h5>无始山</h5>
          <p class="p1">+oo</p>
          <p class="p2">人族禁地</p>
          <p class="p3"><span>有缘者入</span> 元/月</p>
        </div>
      </div> -->
      <!-- 房源列表 -->
      <house-list></house-list>
    </div>
    <!-- 底部区域 -->
    <van-tabbar placeholder>
      <van-tabbar-item
        ><van-button type="default">收藏</van-button></van-tabbar-item
      >
      <van-tabbar-item
        ><van-button block type="default">在线咨询</van-button></van-tabbar-item
      >
      <van-tabbar-item
        ><van-button type="primary">电话预约</van-button></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { houseInfo } from '@/api/home'
import HouseList from '../Search/compoents/HouseList.vue'
export default {
  created () {
    this.getHouseInfo()
  },
  data () {
    return {
      active: 0,
      houselist: {}, // 后台数据
      houseImg: [], // 轮播图片
      supporting: [] // 配置
    }
  },
  methods: {
    async getHouseInfo () {
      try {
        const res = await houseInfo()
        console.log('2', res)
        this.houselist = res.data.body
        this.houseImg = res.data.body.houseImg
        this.supporting = res.data.body.supporting
      } catch (err) { console.log(err) }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { HouseList }
}
</script>

<style scoped lang='less'>
/* 导航 */

/* 轮播图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 92px;
}
.van-swipe-item img {
  width: 100%;
  height: 504px;
}
/* 小区梗概 */
.info {
  padding: 30px;
  width: 100%;
  height: 533px;
  background-color: #fff;
  .one {
    font-size: 32px;
    color: #333;
    border-bottom: 1px solid #ccc;
    .p1 {
      margin: 32px 0;
    }
    .p2 {
      width: 92px;
      height: 40px;
      font-size: 24px;
      color: #39becd;
      background-color: #e1f5f8;
      padding: 8px 10px;
      margin: 0 10px 20px 0;
    }
  }
  .two {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 30px 0;
    border-bottom: 1px solid #ccc;
    span {
      flex: 1;
      h4 {
        font-size: 36px;
        color: #fa5741;
      }
      p {
        font-size: 28px;
        color: #999;
      }
    }
  }
  .three {
    padding-top: 20px;
    .van-row {
      .van-col {
        font-size: 26px;
        color: #333;
        padding: 5px;
        span {
          color: #999;
        }
      }
    }
  }
}
.name {
  font-size: 28px;
  margin: 0 22.5px;
  color: #666;
  padding: 20px 0;
}
.hui {
  width: 100%;
  height: 30px;
  background-color: #f6f5f6;
}
/* 地图区域 */
.map {
  width: 750px;
  height: 290px;
  background-color: pink;
}
/* 房屋配套 */
.mating {
  width: 750px;
  margin: 0 0 20px;
  padding: 0 20px;
  h4 {
    color: #333;
    font-size: 30px;
    margin: 0 0 20px;
    padding: 30px 0;
    border-bottom: 2px solid #ccc;
  }
  .mating-info {
    ul {
      width: 750px;
      height: 282px;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      li {
        width: 150px;
        height: 142px;
        padding: 20px 0;
        p {
          font-size: 28px;
        }
      }
    }
  }
}
/* 房源概况 */
.survey {
  width: 750px;
  margin: 20px 0;
  padding: 0 20px;
  h4 {
    color: #333;
    font-size: 30px;
    margin: 0 0 20px;
    padding: 30px 0;
    border-bottom: 2px solid #ccc;
  }
  .survey-info {
    .survey-info-up {
      width: 750px;
      height: 124px;
      margin: 0 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        .img {
          width: 124px;
          height: 124px;
          img {
            width: 100%;
            height: 100%;
            padding: 20px 20px 0 0;
          }
        }
        .user {
          padding: 30px 10px;
          .p1 {
            color: #333;
            font-size: 28px;
          }
          .p2 {
            color: #fa5741;
            font-size: 24px;
          }
        }
      }
      .right {
        padding: 6px 30px;
        .van-button {
          font-size: 28px;
          color: #33be85;
          width: 148px;
          height: 60px;
          margin-right: 60px;
          transform: translateY(-20px);
        }
      }
    }
    .info-h {
      p {
        color: #333;
        font-size: 28px;
        padding: 20px 0;
      }
    }
  }
}
/* 猜你喜欢 */
.like {
  width: 750px;
  margin: 20px 0;
  padding: 0 20px;
  h4 {
    color: #333;
    font-size: 30px;
    margin: 0 0 20px;
    padding: 30px 0;
    border-bottom: 2px solid #ccc;
  }
  .house_list {
    width: 100%;
    height: 240px;
    padding: 36px 30px 0;
    display: flex;
    justify-content: start;
    .left {
      width: 212px;
      height: 160px;
      background-color: #fff;
      img {
        width: 100%;
      }
    }
    .right {
      width: 454px;
      height: 186px;
      margin-left: 24px;
      h5 {
        margin: 0;
        font-size: 30px;
      }
      p {
        margin: 0;
        font-size: 24px;
      }
      .p2 {
        width: 140px;
        height: 40px;
        line-height: 20px;
        background-color: #e1f5f8;
        color: #39becd;
        font-size: 26px;
        margin-right: 10px;
        padding: 8px 10px;
      }
      .p3 {
        color: #fa5741;
        span {
          font-size: 32px;
          font-weight: 700;
        }
      }
    }
  }
}
/* 底部按钮 */
.van-button {
  width: 250px;
  height: 100px;
}
</style>
