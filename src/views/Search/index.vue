<template>
  <div>
    <!-- 搜索 -->
    <div class="search-van">
      <van-search
        v-model="value"
        show-action
        label="北京 |"
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
        <template #left
          ><van-icon color="#fff" name="arrow-left" size="20" /></template
        ><template #action
          ><van-icon color="#fff" name="location-o" size="20" /></template
      ></van-search>
    </div>
    <!-- 菜单 -->
    <van-dropdown-menu
      ><van-dropdown-item
        v-model="value1"
        :options="option1"
      ></van-dropdown-item>
      <van-dropdown-item
        v-model="value2"
        :options="option2"
      ></van-dropdown-item>
      <van-dropdown-item
        v-model="value3"
        :options="option3"
      ></van-dropdown-item>
      <van-dropdown-item
        v-model="value4"
        :options="option4"
      ></van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value1: 0,
      value2: 'a',
      value3: 'a',
      value4: 'a',
      option1: [
        { text: '区域', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '方式', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '租金', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option4: [
        { text: '筛选', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
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
.search-van {
  background-color: #21b97a;
  padding-right: 30px;
  .van-search {
    background-color: #21b97a;
    .van-icon {
      margin-left: 15px;
    }
  }
}
</style>
