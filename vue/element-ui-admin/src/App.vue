<template>
  <div id="app">
    <!-- <el-alert
    title="成功提示的文案"
    type="success" /> -->
    <ele-alert
      title="天赐和美女困在电梯里"
      type="success" 
      @close="doAlertClose"
      v-if="hasErr">
    </ele-alert>
  </div>
</template>

<script>
import EleAlert from '@/components/EleAlert'
import ArticleTable from '@/views/ArticleTable'
// @ 表示alias 地址短链接， 在哪里都指向src 让地址引入更轻松
import Comment from '@/components/Comment'
import EleRadioGroup from '@/components/EleRadioGroup'
import EleRadio from '@/components/EleRadio'
import Login from '@/views/Login'
export default {
  name: 'App',
  data () {
    return {
      hasErr: false,
      sex: 0,
      content: '<span>美团挂了， 还有UC</span>'
    }
  },
  mounted () {
    setTimeout(() => {
      this.hasErr = true
    }, 2000)
  },
  components: {
    // ArticleTable,
    EleAlert
    // Comment
    // EleRadioGroup,
    // EleRadio,
    // Login
  },
  methods: {
    doAlertClose() {
      console.log('close');
    }
  }
}
</script>

<style lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>


