<template>
<div>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <label>
      <input v-model="email" placeholder="email" />
    </label>
    <label>
      <input v-model="pass" placeholder="password" type="password" />
    </label>
    <button type="submit">Login</button>
    login 已完成， 再来login 跳转到首页
    logout 退出 清空token
  </form>
</div>
</template>
<script>
import auth from '@/auth';
export default {
  data () {
    return {
      email: 'joe@example.com',
      pass: ''
    }
  },
  mounted () {
    console.log(this.$route.query.redirect);
  },
  methods: {
    login () {
      // console.log('fdfd');
      auth.login(this.email, this.pass, (loggedIn) => {
        console.log(loggedIn)
        if (loggedIn) {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
      // 验证（email, pass）=> auth.login()
      // joe@eample.com  111111
      // 失败，成功 localStorage.setItem('token', 1231)
      // 1. auth.login 传参， cb 
      // 2. this.$router
    }
  }
}
</script>
