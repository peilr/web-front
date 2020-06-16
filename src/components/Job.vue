<template>
    <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"><el-button class="bg-purple" style="center">工作查询</el-button></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-button class="bg-purple" style="center">医疗查询</el-button></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-button class="bg-purple" style="center">新闻资讯</el-button></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-button class="bg-purple" style="center">更多...</el-button></div></el-col>
    </el-row>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align:center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
</style>