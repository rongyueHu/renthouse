<template>
  <div>
    <!-- 发布房源 -->
    <van-nav-bar
      fixed
      title="发布房源"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 房源信息 -->
    <van-cell value="房源信息" />
    <!-- 小区名称 -->
    <van-cell
      title="小区名称"
      value="请输入小区名称"
      is-link
      to="/searchinfo"
    />
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
    <!-- 户型/楼层/朝向 -->
    <my-house></my-house>
    <my-floor></my-floor>
    <my-chao-xiang></my-chao-xiang>
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
      <li>
        <van-icon name="cart-circle-o" />
        <p>衣柜</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>洗衣机</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>空调</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>天然气</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>冰箱</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>暖气</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>电视</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>热水器</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>宽带</p>
      </li>
      <li>
        <van-icon name="cart-circle-o" />
        <p>沙发</p>
      </li>
    </ul>
    <!-- 房屋描述 -->
    <van-cell-group>
      <van-field label="房屋描述" readonly />
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        show-word-limit
      />
    </van-cell-group>
    <!-- 底部区域 -->
    <van-tabbar placeholder>
      <van-tabbar-item
        ><van-button block type="default">取消</van-button></van-tabbar-item
      >
      <van-tabbar-item
        ><van-button type="primary">提交</van-button></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import MyHouse from './components/MyHouse.vue'
import MyFloor from './components/MyFloor.vue'
import MyChaoXiang from './components/MyChaoXiang.vue'
export default {
  created () { },
  data () {
    return {
      value: '',
      text: ''
    }
  },
  methods: {
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
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { MyHouse, MyFloor, MyChaoXiang }
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
  overflow: hidden;
}
.van-uploader {
  margin: 30px 0 0 30px;
}
/* 房屋配置 */
ul {
  width: 750px;
  height: 282px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  li {
    width: 150px;
    height: 142px;
    padding: 20px 0;
    p {
      font-size: 28px;
    }
  }
}
/* 底部按钮 */
.van-button {
  width: 375px;
  height: 100px;
}
</style>
