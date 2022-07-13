<template>
  <div>
    <!-- 我的收藏-->

    <van-nav-bar
      title="收藏列表"
      left-arrow
      fixed
      @click-left="$router.go(-1)"
    />

    <!-- 房源列表 -->
    <house-list></house-list>
  </div>
</template>

<script>
import { getUserCollection } from '@/api/user'
import HouseList from '../Search/compoents/HouseList.vue'
export default {
  created () { },
  data () {
    return {
      collectionlist: []
    }
  },
  methods: {
    async getCollection () {
      try {
        const res = await getUserCollection()
        console.log('res5', res)
        this.collectionlist = res.data.body
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
/* .collectionlist {
  position: fixed;
  width: 100%;
  top: 0;
} */
</style>
