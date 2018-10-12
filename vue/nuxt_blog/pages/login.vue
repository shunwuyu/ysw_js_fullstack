<template>
  <div class="login container">
    <input type="text" placeholder="用户名" autocomplete="off" v-model="user.username">
    <input type="password" placeholder="密码" autocomplete="off" v-model="user.password" @keyup.enter="login">
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  head () {
    return {
      title : '登录'
    }
  },
  methods: {
    login () {
      if (!this.user.username || !this.user.password) {
        return false;
      }

      this.$store.dispatch('LOGIN', this.user)
        .then(data => {
          if (data.success) {
            this.$router.push('/admin/publish')
          } else {
            console.log('出错了');
          }
        })
    }
  }
}
</script>

