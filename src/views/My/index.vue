<template>
  <div>
    <!--登录界面  -->
    <div class="header-deng" v-if="user && user.token">
      <img src="@/assets/avatar.png" alt="" />
      <div class="denglu">
        <div class="denglu-icon">
          <img src="@/assets/mobile.png" alt="" />
        </div>
        <div class="denglu-info">
          <p>12345678</p>
          <van-button round size="mini" type="primary" @click="logout"
            >退出</van-button
          >
          <div>编辑个人资料</div>
        </div>
      </div>
    </div>
    <!-- 未登录界面 -->
    <div class="header-wei" v-else>
      <img src="@/assets/bg.png" alt="" />
      <div class="denglu">
        <div class="denglu-icon">
          <img src="@/assets/mobile.png" alt="" />
          <p>游客</p>
          <van-button
            block
            size="small"
            type="primary"
            @click="$router.push('/login')"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <!-- 6宫格 -->
    <van-grid :column-num="3">
      <van-grid-item
        @click="moreContent"
        border="false"
        icon="star-o"
        text="我的收藏"
      />
      <van-grid-item border="false" icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="idcard" text="成为房主" />
      <van-grid-item icon="user-circle-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <!-- 广告加入我们 -->
    <div class="my-ad">
      <img src="@/assets/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'My',
  /* 开机显示 */
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await getUserInfo()
        console.log('res', res)
        this.userInfo = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({
          title: '大帝',
          message: '确认退出嘛'
        })
        this.$store.commit('setUser', null)
      } catch (err) { console.log(err) }
    },
    moreContent () {
      if (this.user && this.user.token) {
        this.$router.push({
          path: '/collection'
        })
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header-wei {
  position: relative;
  width: 100%;
  height: 600px;
  img {
    width: 100%;
  }
  .denglu {
    position: absolute;
    width: 85%;
    height: 55%;
    left: 50%;
    background-color: #fff;
    bottom: 0;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    .denglu-icon {
      width: 140px;
      height: 140px;
      margin: auto;
      margin-top: -70px;
      border: 10px solid #f5f5f5;
      border-radius: 50%;
      p {
        text-align: center;
        font-size: 26px;
      }
    }
  }
}
.header-deng {
  position: relative;
  img {
    width: 100%;
  }
  .denglu {
    position: absolute;
    width: 85%;
    height: 55%;
    left: 50%;
    background-color: #fff;
    bottom: 20px;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    .denglu-icon {
      width: 140px;
      height: 140px;
      margin: auto;
      margin-top: -70px;
      border: 10px solid #f5f5f5;
      border-radius: 50%;
    }
  }
  .denglu-info {
    text-align: center;
    p {
      font-size: 26px;
      text-align: center;
      margin: unset;
    }
    .van-button {
      margin-bottom: 50px;
    }
    div {
      font-size: 26px;
      text-align: center;
    }
  }
}
.my-ad img {
  width: 100%;
}
/* .van-grid-item__content::after {
  border-width: 0;
} */
</style>
