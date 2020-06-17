<template>
    <section>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-office-building"></i><el-button class="bg-purple" @click="OnWork">工作查询</el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-first-aid-kit"></i><el-button class="bg-purple" @click="OnHealthy">医疗查询</el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-chat-line-square"></i><el-button class="bg-purple" @click="OnNew">新闻资讯</el-button></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-loading"></i><el-button class="bg-purple" @click="More">更多...</el-button></div></el-col>
        </el-row>
        <div v-if="workVisible">
            <el-form label-width="120px" :mode="workForm">
                <el-form-item label="城市">
                    <el-input v-model="workForm.city"></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-input v-model="workForm.company"></el-input>
                </el-form-item>
                <el-form-item label="岗位">
                    <el-input v-model="workForm.job_name"></el-input>
                </el-form-item>
                <el-form-item label="技能">
                    <el-input v-model="workForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="薪资范围">
                    <el-input v-model="workForm.salary"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="ResetWork">重置</el-button>
                    <el-button type="primary" @click="QueryWork">立即查询</el-button>
                    <el-input
                    v-model="workSearh"
                    size="mini"
                    placeholder="输入关键字搜索"/>
                </el-form-item>
            </el-form>

            <el-table :data="workData.filter(data => !workSearh || data.company.toLowerCase().includes(workSearh.toLowerCase()))" border height="650">
                <el-table-column prop="city" label="城市">

                </el-table-column>
                <el-table-column prop="company" label="公司">

                </el-table-column>
                <el-table-column prop="job_name" label="岗位">

                </el-table-column>
                <el-table-column prop="exp" label="经验">

                </el-table-column>
                <el-table-column prop="salary" label="薪水">

                </el-table-column>
                <el-table-column label="快速查看">
                    <template slot-scope="scope">
                        <a :href="scope.row.link" target="_blank">{{scope.row.link}}</a>
                    </template>
                </el-table-column>
                
            </el-table>
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
import {queryWork} from '../api/api'
export default {
    name: "Job",
    data() {
        return {
            workVisible: false,
            healthyVisible: false,
            newVisible: false,
            moreVisible: false,

            moreList: [{name:"sports", value:"football"}],

            workForm: {
                city: "",
                company: "",
                job_name: "",
                desc: "",
                salary: "",
            },
            workData: [],
            workSearh: '',

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
        ResetWork() {
            this.workForm = Object.assign({
                city: "",
                company: "",
                job_name: "",
                desc: "",
                salary: "",
            })
        },
        async QueryWork() {
            console.log(this.workForm)
            let city = this.workForm.city
            let com = this.workForm.company
            let job = this.workForm.job_name
            let desc = this.workForm.desc
            let salary_list = this.workForm.salary.split('，')

            let rsp = await queryWork(city, com, job, desc, parseInt(salary_list[0]), parseInt(salary_list[1]))
            this.workData = rsp.data;
            console.log(rsp)
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