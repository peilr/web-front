<template>
    <section>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-office-building"></i><el-button class="bg-purple" @click="OnWork">工作查询</el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-first-aid-kit"></i><el-button class="bg-purple" @click="OnHealthy">医疗查询</el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-chat-line-square"></i><el-button class="bg-purple" @click="OnNew">新闻资讯</el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-loading"></i><el-button class="bg-purple" @click="More">更多...</el-button></div></el-col>
        </el-row>
        <div v-if="workVisible">
            <el-form label-width="120px">
                <el-form-item label="城市">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="岗位">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="技能">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="薪资范围">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div v-if="healthyVisible">
            <el-form label-width="120px">
                <el-form-item label="城市">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="医院">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="部位">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div v-if="newVisible">
        </div>
        <div v-if="moreVisible">
            <el-card class="box-card">
                <div v-for="item in moreList" :key="item.name">
                    {{'更多内容 ' + item.name}}
                </div>
            </el-card>
        </div>
        
    </section>
    
</template>

<script>
export default {
    name: "Job",
    data() {
        return {
            workVisible: false,
            healthyVisible: false,
            newVisible: false,
            moreVisible: false,

            moreList: [{name:"sports", value:"football"}],

        }
    },
    methods: {
        OnWork() {
            console.log("工作！")  
            this.moreVisible = false
            this.healthyVisible = false
            this.newVisible = false
            this.workVisible = true
        },
        OnHealthy() {
            console.log("医疗!")
            this.moreVisible = false
            this.workVisible = false
            this.newVisible = false
            this.healthyVisible = true
        }, 
        OnNew() {
            console.log("新闻！")
            this.moreVisible = false
            this.workVisible = false
            this.healthyVisible = false
            this.newVisible = true
        },
        More() {
            console.log("更多！")
            this.workVisible = false
            this.healthyVisible = false
            this.newVisible = false
            this.moreVisible = true
        }
    }
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