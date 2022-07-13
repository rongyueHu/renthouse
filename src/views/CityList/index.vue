<template>
  <div>
    <!-- 导航栏 城市列表 -->
    <van-nav-bar
      fixed
      title="城市列表"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 索引列表 -->
    <van-index-bar :index-list="indexList" style="margin-top: 64px">
      <div v-for="(val, index) in indexList" :key="index">
        <van-index-anchor sticky-offset-top="100px" :index="val">{{
          val === "#" ? "当前城市" : val === "热" ? "热门城市" : val
        }}</van-index-anchor>
        <van-cell
          @click="chose"
          v-for="(item, index) in obj[val]"
          :key="index"
          :title="item.label"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { areaHot, areaCity } from '@/api/home'
import { getCityInfo } from '@/api/city'
import { Toast } from 'vant'
export default {
  created () {
    this.getList()
    this.getCityInfo()
  },
  data () {
    return {
      citylist: [], // 城市列表
      hotlist: [], // 热门城市
      indexList: ['#', '热'], // 索引
      obj: {}

    }
  },
  methods: {
    async getList () {
      try {
        // 获取城市数据
        const res1 = await areaCity(1)
        console.log('res1', res1)
        this.citylist = res1.data.body// 全部城市列表
        const obj = {}// 合并后对象
        this.citylist.forEach(item => { // 对全部城市数据进行遍历
          const first = item.short.substr(0, 1).toUpperCase()
          // 定义一个变量接收裁剪后的数据，数据为一堆字母组成的字符串
          // 城市列表是一个数组嵌套对象，其中item的意思是数组当前项的值，也就是城市列表中的一个对象包含若干个数组
          if (obj[first]) { // obj[key]/obj.key  代表的是obj的一个属性，代表取obj的key属性值
            obj[first].push(item)
          } else {
            obj[first] = [item]
          }
          this.obj = { ...obj, ...this.citylist }
          this.cityindexlist = Object.keys(obj).sort()
        })
        console.log('12', obj)
        this.indexList.push(...this.cityindexlist)
        console.log('13', this.indexList)
      } catch (err) { console.log(err) }
      try {
        // 获取热门城市数据
        const res = await areaHot()
        console.log('res', res)
        this.hotlist = res.data.body // 获取热门城市数据
        this.obj = { ...this.obj, 热: this.hotlist, '#': [{ label: this.$store.state.houseName }] }//
      } catch (err) {
        console.log(err)
      }
    },
    chose (event) {
      // 获取点击地址
      console.log(event.target.innerText)
      // 判断是否是指定城市
      /*  const list = ['北京', '上海', '广州', '深圳'] */
      // eslint-disable-next-line no-constant-condition
      if (event.target.innerText === '北京' || event.target.innerText === '上海' || event.target.innerText === '深圳' || event.target.innerText === '广州') {
        // 将点击地址替换默认地址
        this.$store.state.houseName = event.target.innerText
        this.$router.go(-1)// 后退一步
      } else {
        Toast('该城市暂无房源')
      }
    },
    async getCityInfo () {
      try {
        const res = await getCityInfo({
        })
        console.log('res7', res)
      } catch (err) { console.log(err) }
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
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
}
</style>
