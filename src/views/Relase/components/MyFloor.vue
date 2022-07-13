<template>
  <div>
    <van-field
      is-link
      input-align="right"
      readonly
      clickable
      label="楼层"
      :value="value"
      placeholder="请选择"
      @click="showPicker = true"
    ></van-field>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      ></van-picker>
    </van-popup>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: '',
      showPicker: false,
      columns: ['低楼层', '中楼层', '高楼层']
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
