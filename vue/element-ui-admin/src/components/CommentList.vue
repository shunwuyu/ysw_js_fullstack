<template>
  <div>
    <comment-item v-for="(item, index) in list"
    :content="item"
    :key="index"
     />
    <div v-if="list.length==0" class="empty-msg">当前没有评论</div>
  </div>
</template>
<script>
import CommentItem from './CommentItem'
export default {
  props: {
    'list': Array
  },
  components: {
    CommentItem
  }
}  
</script>
<style>

</style>
