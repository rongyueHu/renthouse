<template>
  <div>
    <!-- 发布房源 -->
    <van-nav-bar title="发布房源" left-arrow @click-left="onClickLeft" />
    <!-- 房源信息 -->
    <van-cell value="房源信息" />
    <!-- 小区名称 -->
    <van-cell title="小区名称" value="请输入小区名称" is-link to="index" />
    <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
    <van-cell-group>
      <!-- 租金 -->
      <van-field v-model="value" label="租 金" placeholder="请输入租金/月"
        ><template #extra>￥/月</template></van-field
      >
      <!-- 建筑面积 -->
      <van-field v-model="value" label="建筑面积" placeholder="请输入建筑面积"
        ><template #extra>㎡</template></van-field
      >
    </van-cell-group>
    <!-- 户型 -->
    <van-cell is-link title="户 型" @click="show = true" value="请选择" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    <!-- 所在楼层 -->
    <van-cell is-link title="户所在楼层" @click="show = true" value="请选择" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    <!-- 朝向 -->
    <van-cell is-link title="朝向" @click="show = true" value="请选择" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    <!-- 房屋标题 -->
    <van-cell-group>
      <van-cell title="房屋标题" />
    </van-cell-group>
    <van-field
      v-model="text"
      placeholder="请输入标题(例如：整租 小区名2室 5000元)"
    />
    <!-- 房屋图像 -->
    <van-cell-group>
      <van-cell title="房屋图像" />
    </van-cell-group>
    <van-uploader :before-read="beforeRead" />
    <!-- 房屋配置 -->
    <van-cell-group>
      <van-cell title="房屋配置" />
    </van-cell-group>
    <!-- 10宫格 -->
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  created () { },
  data () {
    return {
      show: false,
      actions: [{ name: '一室' }, { name: '二室' }, { name: '三室' }]
    }
  },
  methods: {
    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false
      Toast(item.name)
      console.log(item.name)
    },
    // 返回布尔值
    beforeRead (file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片')
        return false
      }
      return true
    },
    // 返回 Promise
    asyncBeforeRead (file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片')
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        } else {
          const img = new File(['foo'], 'bar.jpg', {
            type: 'image/jpeg'
          })
          resolve(img)
        }
      })
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
/* 房源信息 */
.van-cell__value--alone {
  color: #21b97a;
  font-size: 30px;
}
.van-cell {
  border-bottom: 1px solid rgb(245, 241, 241);
}
/* 发布房源 标题 */
.van-nav-bar {
  font-size: 32px;
}
.van-uploader {
  margin: 30px 0 0 30px;
}
</style>
