<template>
  <div class="article-wrap" v-if="article">
    
  </div>
</template>

<script>

import fly from 'flyio';

export default {
  data () {
    return {
      article: null
    }
  },

  components: {
  
  },

  methods: {
  },
  // life circle
  created () {
  
  },

  async onLoad() {
    let id = '59faec85e95aa6373e17fd85';
    let res = await fly.get(`https://cnodejs.org/api/v1/topic/${id}`)
    console.log(res);
  }
}
</script>

<style scoped>

</style>
