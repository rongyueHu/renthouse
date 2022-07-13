<template>
  <div>
    <!-- 搜索框 -->
    <!-- search 确定搜索时触发 -->
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        autofocus
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="$router.go(-1)"
        @focus="isSearch = false"
      />
    </form>
    <!-- 搜索历史 -->
    <!-- 当搜索框是空的时候，显示搜索历史 -->
    <!-- 当搜索框中有值的时候，显示搜索建议，当回车时候显示搜索结果 -->
    <!-- 搜索历史 -->
    <!-- 当搜索框内容为空的时候搜索历史出现，搜索结果和搜索建议隐藏 -->
    <SearchHistory v-if="searchText === ''"></SearchHistory>
    <template v-else>
      <!-- 搜索结果 -->
      <!--  -->
      <SearchResults v-if="isSearch" :searchText="searchText"></SearchResults>
      <!-- 搜索建议 -->
      <!-- search确定搜索时候触发 -->
      <SearchSuggest
        v-else
        :searchText="searchText"
        @search="onSearch"
      ></SearchSuggest>
    </template>
  </div>
</template>

<script>
// 引入搜索历史，搜索建议，搜索结果
import SearchHistory from './components/SearchHistory.vue'
import SearchResults from './components/SearchResults.vue'
import SearchSuggest from './components/SearchSuggest.vue'
export default {
  created () { },
  data () {
    return {
      searchText: '', // 搜索内容
      isSearch: false // 搜索框是否有内容,默认没有回车
    }
  },
  methods: {
    // 想实现的需求：在搜索input回车的时候给搜索建议单元格点击的时候
    onSearch (str) {
      this.searchText = this.str // 将输入的内容给到data中定义的searchText
      this.isSearch = true // 打开isSearch,隐藏搜索历史，展示搜索建议
      this.$store.commit('setSearchHistoryList', str) // 将输入的str提交给vuex保存
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { SearchHistory, SearchResults, SearchSuggest }
}
</script>

<style scoped lang='less'>
</style>
