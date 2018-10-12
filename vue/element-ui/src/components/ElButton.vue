<template>
  <button
  @click="handleClick"
  :type="nativeType"
  class="el-button"
  :class = "[
    type? 'el-button--' + type : '',
    {'is-disabled': buttonDisabled,
    'is-loading': loading}
  ]"
  :disabled="buttonDisabled">
    <i class="el-icon-loading" v-if="loading"></i>
    <i v-if="icon&&!loading" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'ElButton',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    loading: Boolean,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    buttonDisabled () {
      return this.disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}  
</script>
<style>

</style>
