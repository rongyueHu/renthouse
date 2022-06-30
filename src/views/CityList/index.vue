<template>
  <div>
    <!-- 城市列表 -->
    <van-nav-bar title="城市列表" left-arrow fixed @click-left="onClickLeft" />
    <!-- 城市索引栏 -->
    <van-index-bar :index-list="indexList">
      <van-index-anchor
        v-for="(item, index) in indexList"
        :key="index"
        :index="index"
        >标题1</van-index-anchor
      >
      <van-cell v-for="(item, index) in citylist" :key="index" :title="title">{{
        item.label
      }}</van-cell>
    </van-index-bar>
  </div>
</template>

<script>
import { areaCity, areaHot } from '@/api/home'
export default {
  name: 'CityList',
  created () {
    this.getCityList()
    this.getCityHot()
  },
  data () {
    return {
      // 侧边索引对应项(用于组件渲染侧边导航)
      indexList: [],
      // cell区域标题(外层遍历) cell区域内容(内层遍历)
      hotList: {},
      citylist: []
    }
  },
  methods: {
    async getCityList () {
      try {
        const res = await areaCity(this.level)
        console.log('res2', res)
        this.citylist = res.data.body
      } catch (err) { console.log(err) }
    },
    async getCityHot () {
      try {
        const res = await areaHot()
        console.log('res3', res)
      } catch (err) { console.log(err) }
    },
    // 返回上一层
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  z-index: 9999;
}
.van-index-anchor {
  padding-top: 500px;
}
</style>
