<template>
<div>
  {{ html }}
</div>
</template>
<script>
// import Bus from '@/common/bus.js'
export default {
  data () {
    return {
      html: '还没有点击'
    }
  },
  created () {
    this.$on('global:getTarget', index => {
      this.html = `第${index}个元素被点击`
    })
  }
}
</script>
