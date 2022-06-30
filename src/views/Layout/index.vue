<template>
  <div>
    <!-- 二级路由 -->
    <router-view class="main"> </router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/info" icon="coupon-o">资讯</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 0
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.main {
  padding-bottom: 100px;
  /*   background-color: #f5f7f9; */
}
</style>
