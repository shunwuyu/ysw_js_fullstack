<template>
  <div class="index container">
    <top-list :articles="$store.state.articles"></top-list>
    <p class="load-tip" v-if="isLoading">加载中...</p>
    <p class="load-tip" v-if="noMore">没有更多文章了</p>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Home page'
  },
  data () {
    return {
      isLoading: false,
      noMore: false
    }
  }
}
</script>