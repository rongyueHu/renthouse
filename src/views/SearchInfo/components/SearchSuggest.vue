<template>
  <div>
    <!-- 搜索建议 -->
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('search', item)"
    >
      <template #title>
        <span v-html="highlight(item)"></span>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getSuggestList } from '@/api/search'
let timer = null
export default {
  props: {
    searchText: {
      type: [String, Number],
      required: true
    }
  },
  created () { },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getSuggestList () {
      clearTimeout(timer)
      timer = setTimeout(async () => {
        try {
          const res = await getSuggestList(this.searchText, this.$store.state.houseName)
          console.log('t', res)
        } catch (err) { console.log(err) }
      }, 900)
    },
    // 这块要渲染的不是普通的字符串，而是html片段，所以必要v-html v-html是属性绑定，所以不能用过滤器
    // 所以只能用methods
    highlight (str) {
      const reg = new RegExp(this.searchText, 'g')
      return str.replace(reg, `<span style="color:red">${this.searchText}</span>`)
    }
  },
  computed: {},
  watch: {
    /* searchText: {
      handler () {
        clearTimeout(timer)
        timer = setTimeout(async () => {
          try {
            const res = await getSuggestList({ name: this.name, id: this.id })
            console.log('time', res)
          } catch (err) { console.log(err) }
        }, 900)
      },
      immediate: true // 立即监听 组件在创建时候就会监听一次
    } */
  },
  filters: {},
  components: {},
  // 组件被销毁了，要清掉定时器，避免内存泄漏
  beforeDestroy () {
    clearTimeout(timer)
  }
}
</script>

<style scoped lang='less'>
</style>
