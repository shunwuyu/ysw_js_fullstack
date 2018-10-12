<template>
  <div>
    <el-col :span="24" class="pagination">
      <el-pagination 
      layout="prev, pager, next"
      :current-page="currentPage"
      :page-size="pagesize"
      :total="totalCount"
      @current-change="handleCurrentPage"
      style="float:right">
      </el-pagination>
    </el-col>
  </div>
</template>
<script>
export default {
  props: ['totalCount', 'currentPage', 'pagesize'],
  methods: {
    handleCurrentPage (val) {
      console.log(val);
      this.$emit('turnPage', val);
    }
  }
}  
</script>
<style>
</style>
