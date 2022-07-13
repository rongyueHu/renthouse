<template>
  <div>
    <!-- 搜索 -->
    <div class="search-van">
      <van-search show-action placeholder="请输入小区或地址">
        <template #label>
          <p @click="$router.push('/citylist')">
            {{ $store.state.houseName }}
          </p>
        </template>
        <template #left
          ><van-icon
            @click="$router.push('/home')"
            color="#fff"
            name="arrow-left"
            size="20" /></template
        ><template #action
          ><van-icon color="#fff" name="location-o" size="20" /></template
      ></van-search>
    </div>
    <!-- 菜单 -->
    <div class="option">
      <!-- 区域 -->
      <van-field
        label="区域"
        readonly
        clickable
        @click="showPicker1 = true"
      ></van-field>
      <van-popup v-model="showPicker1" position="bottom">
        <van-picker
          value-key="label"
          toolbar-position="bottom"
          show-toolbar
          :columns="columns1"
          @cancel="showPicker1 = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <!-- 方式 -->
      <van-field label="方式" readonly clickable @click="showPicker2 = true" />
      <van-popup v-model="showPicker2" position="bottom">
        <van-picker
          value-key="label"
          toolbar-position="bottom"
          show-toolbar
          :columns="columns2"
          @cancel="showPicker2 = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <!-- 租金 -->
      <van-field label="租金" readonly clickable @click="showPicker3 = true" />
      <van-popup v-model="showPicker3" position="bottom">
        <van-picker
          value-key="label"
          toolbar-position="bottom"
          show-toolbar
          :columns="columns3"
          @cancel="showPicker3 = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <!-- 筛选 -->
      <van-field label="筛选" readonly clickable @click="show = true" />
      <van-popup
        class="shaixuan"
        v-model="show"
        closeable
        position="bottom"
        :style="{ width: '100%', height: '100%' }"
        ><MyScreen></MyScreen>
      </van-popup>
      <!-- 房源列表 -->
    </div>
    <!-- 点击事件 -->
    <!-- 区域/方式/租金对应的选择器 -->
    <!-- 筛选对应的选择器 -->
    <!-- 房源列表 -->
    <house-list></house-list>
  </div>
</template>

<script>
import { HousesCondition } from '@/api/home'
import HouseList from './compoents/HouseList.vue'
import MyScreen from './compoents/MyScreen.vue'
export default {
  created () {
    this.getHouseCanditon()
  },
  data () {
    return {
      list: {}, // 后台数据
      columns3: [], // 租金
      value: '',
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
      columns1: [],
      columns2: [], // 方式
      show: false
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker1 = false
      this.showPicker2 = false
      this.showPicker3 = false
    },
    /* 筛选 */
    showPopup () {
      this.show = true
    },
    async getHouseCanditon () {
      try {
        const res = await HousesCondition()
        console.log('12', res) // 打印后台数据
        this.list = res.data.body // 存放后台数据
        this.columns3 = res.data.body.price // 租金内容
        this.columns2 = res.data.body.rentType// 租房方式
        res.data.body.area.children[0].children = [{ label: '' }]
        res.data.body.subway.children[0].children = [{ label: '' }]
        this.columns1 = [res.data.body.area, res.data.body.subway]
      } catch (err) { console.log(err) }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { HouseList, MyScreen }
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
.option {
  width: 750px;
  height: 88px;
  display: flex;
}
/* .van-picker__toolbar{
} */
/* 取消按钮 */
/deep/ .van-picker__cancel {
  width: 250px;
  background-color: #fff;
  color: #21b97a;
}
/* 确认按钮 */
/deep/ .van-picker__confirm {
  flex: 1;
  background-color: #21b97a;
  color: #fff;
}
/* 筛选 */
/deep/ .shaixuan {
  left: 90px;
}
</style>
