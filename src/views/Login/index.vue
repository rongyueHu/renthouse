<template>
  <div>
    <!-- 账号登录 -->
    <van-nav-bar left-arrow title="账号登录" />
    <!-- 账号密码区域 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="text"
        name="text"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请输入账号' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '账号必须为4-16位字母数字组合',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: /^\d{6,16}$/, message: '密码必须为6-16位纯数字' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <p class="registered"><a href="javascript:;">还没有账号，去注册~</a></p>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      text: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        console.log('登录成功')
        // res.data.data
        // token有效期 2个小时 两种思路 让用户重新登录 refresh_token
        // this.$store.commit('setUser', res.data.data)
        // console.log('登录成功')
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
.registered {
  text-align: center;
  a {
    color: #000;
  }
}
</style>
