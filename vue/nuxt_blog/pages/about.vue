<template>
  <div>
    <p> Hi !</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>
<script>
// 同构应用 路由就要交给后端了， 前端项目将做为一些build后的静态文件， 3000端口， 启动路由
export default {
  head: {
    title: 'About page'
  }
}
</script>