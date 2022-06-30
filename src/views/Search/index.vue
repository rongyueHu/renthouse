<template>
  <div>
    <!-- 搜索 -->
    <div class="search-van">
      <van-search
        v-model="value"
        show-action
        label="北京 |"
        placeholder="请输入小区或地址"
      >
        <template #left
          ><van-icon
            @click="onClickLeft"
            color="#fff"
            name="arrow-left"
            size="20" /></template
        ><template #action
          ><van-icon color="#fff" name="location-o" size="20" /></template
      ></van-search>
    </div>
    <!-- 菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item />
      <van-dropdown-item />
      <van-dropdown-item />
      <van-dropdown-item />
    </van-dropdown-menu>
    <!-- 房源列表 -->
    <house-list></house-list>
  </div>
</template>

<script>
import HouseList from './compoents/HouseList.vue'
export default {
  created () {

  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    // 返回上一层
    onClickLeft () {
      this.$router.go(-1)
    }
    /* onConfirm () {
      this.$refs.item.toggle()
    } */
  },
  computed: {},
  watch: {},
  filters: {},
  components: { HouseList }
}
</script>

<style scoped lang='less'>
.search-van {
  background-color: #21b97a;
  padding-right: 30px;
  .van-search {
    background-color: #21b97a;
    .van-icon {
      margin-left: 15px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
