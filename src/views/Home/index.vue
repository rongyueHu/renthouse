<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      touchable
    >
      <van-swipe-item v-for="item in images" :key="item.id"
        ><img
          :src="`http://liufusong.top:8080${item.imgSrc}`"
          alt=""
          v-lazy="img"
      /></van-swipe-item>
      <!--  <van-swipe-item><img src="@/assets/rent.png" alt="" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/five.png" alt="" /></van-swipe-item> -->
    </van-swipe>
    <!-- 搜索 -->
    <div class="search-van">
      <van-search
        v-model="value"
        label="北京 |"
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
      </van-search>
      <router-link to="/map">
        <template>
          <div class="map-search">
            <van-icon size="20" name="location-o" />
          </div> </template
      ></router-link>
    </div>
    <!-- 整租合租地图找房去出租-->
    <div class="rentmap">
      <van-row class="row" type="flex" justify="space-around">
        <!-- 整租 -->
        <van-col span="4"
          ><div class="Rent">
            <div class="renticon">
              <van-icon color="#00ae66" size="50px" name="wap-home-o" />
            </div>
            <h2>整租</h2>
          </div>
        </van-col>
        <!-- 合租 -->
        <van-col span="4">
          <div class="Rent">
            <div class="renticon">
              <van-icon color="#00ae66" size="50px" name="friends-o" />
            </div>
            <h2>合租</h2>
          </div></van-col
        >
        <!-- 地图找房 -->
        <van-col span="4"
          ><div class="Rent">
            <div class="renticon">
              <van-icon color="#00ae66" size="50px" name="location-o" />
            </div>
            <h2>地图找房</h2>
          </div></van-col
        >
        <!-- 去出租 -->
        <van-col span="4"
          ><div class="Rent">
            <div class="renticon">
              <van-icon color="#00ae66" size="50px" name="newspaper-o" />
            </div>
            <h2>去出租</h2>
          </div></van-col
        >
      </van-row>
    </div>
    <!-- 租房小组 -->
    <div class="renthouse-rent">
      <van-cell title="租房小组" value="更多" size="large" />
      <!-- 两端对齐 -->
      <van-row type="flex" justify="space-between">
        <van-col span="12" v-for="item in rentHomeGroups" :key="item.id">
          <img class="left" :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
          <div class="right">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { homeSwiper, homeGroups } from '@/api/home'
import { Toast } from 'vant'
/* import { areaList } from '@vant/area-data' */
export default {
  async created () {
    const res = await homeSwiper()
    console.log(res)
    this.images = res.data.body
    const res1 = await homeGroups(this.area)
    console.log('res1', res1)
    this.rentHomeGroups = res1.data.body
  },
  data () {
    return {
      value: '',
      images: [],
      rentHomeGroups: []
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    },
    onCancel () {
      Toast('取消')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}

</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.van-swipe-item img {
  width: 100%;
}
.rentmap {
  width: 100%;
  height: 204.82px;
  margin: 8px 0;
}
.search-van {
  .van-search {
    position: absolute;
    top: 25px;
    margin-left: 100px;
    padding: 10px 0;
  }
  .map-search {
    position: absolute;
    top: 35px;
    margin-left: 600px;
  }
}
.Rent {
  h2 {
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }
}
.renticon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgb(221, 239, 221);
  .van-icon {
    padding: 10px;
    border-radius: 50%;
  }
}
.van-row,
.row {
  margin-top: 10px;
}
.renthouse-rent {
  background-color: #f6f5f6;
  .van-row {
    padding: 0 20px;
    .van-col {
      margin: 0 0 20px;
      width: 345px;
      height: 120px;
      background-color: #fff;
      display: flex;
      justify-content: start;
      img {
        width: 100px;
        height: 100px;
        margin: 0 20px;
      }
      .right {
        width: 245px;
        height: 100px;
        p {
          font-size: 28px;
          margin: unset;
          color: #333;
          text-align: center;
          padding-top: 7px;
        }
      }
    }
  }
}
</style>
