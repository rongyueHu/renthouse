<template>
  <div>
    <!-- 账号注册 -->
    <van-nav-bar left-arrow title="账号注册" />
    <!-- 账号密码区域 -->
    <van-form @submit="onSubmit" submit-on-enter>
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入注册账号"
        required
        :rules="[
          { required: true, message: '账号' },
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
        required
        :rules="[
          { required: true, message: '密码' },
          { pattern: /^\d{6,16}$/, message: '密码必须为6-16位纯数字' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        required
        placeholder="请确认密码"
        :rules="[
          { required: true, message: '密码' },
          { pattern: /^\d{6,16}$/, message: '密码必须为6-16位纯数字' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" class="denglu" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
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
    font-size: 28px;
  }
}
.denglu {
  background-color: #21b97a;
}
</style>
