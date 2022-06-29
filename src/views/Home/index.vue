<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      touchable
    >
      <van-swipe-item><img src="@/assets/chose.png" alt="" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/rent.png" alt="" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/five.png" alt="" /></van-swipe-item>
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
    <!-- 整租合租地图-->
    <div class="rentmap">
      <van-row type="flex" justify="space-around">
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
      <!-- 每个元素的两侧间隔相等 -->
      <div class="renthouse-rent1">
        <van-row type="flex" justify="space-around">
          <van-col span="11"><a href="#">123</a></van-col>
          <van-col span="11"><a href="#">123</a></van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <van-col span="11"><a href="#">123</a></van-col>
          <van-col span="11"><a href="#">123</a></van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
/* import { areaList } from '@vant/area-data' */
export default {
  created () { },
  data () {
    return {
      value: ''
      /*  areaList */
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
  width: 750px;
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
  background-color: #f2fbf7;
  .van-icon {
    padding: 10px;
  }
}
.van-row {
  margin-top: 10px;
}
.renthouse-rent {
  background-color: #f6f5f6;
}
.renthouse-rent1 {
  padding-bottom: 20px;
  a {
    display: block;
    width: 345px;
    height: 120px;
    background-color: #fff;
    text-align: center;
    line-height: 120px;
  }
}
</style>
