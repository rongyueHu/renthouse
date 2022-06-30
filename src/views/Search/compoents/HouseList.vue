<template>
  <div>
    <!-- 房源列表 -->
    <div class="house_list" v-for="(item, index) in houselist" :key="index">
      <div class="left">
        <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
      </div>
      <div class="right">
        <h4>{{ item.title }}</h4>
        <p class="p1">{{ item.desc }}</p>
        <p class="p2">{{ item.tags[0] }}</p>
        <p class="p3">
          <span>{{ item.price }}</span> 元/月
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { housesCondition } from '@/api/home'
export default {
  created () { this.getHousesCondition() },
  data () {
    return {
      houselist: []
    }
  },
  methods: {
    async getHousesCondition () {
      try {
        const res = await housesCondition()
        console.log('res4', res)
        this.houselist = res.data.body.list
        console.log(this.houselist)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
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
    h4 {
      margin: 0;
      font-size: 30px;
    }
    p {
      margin: 0;
      font-size: 24px;
    }
    .p2 {
      width: 92px;
      height: 40px;
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
</style>
