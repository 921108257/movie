<template>
<div>
  <el-row>
    <el-col :span="22" :offset="1" style="margin-top: 50px">
      <el-table :border=true size='medium' :stripe=true :data="data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
        <el-table-column width="60" label="编号" type="index" :index="indexMethod"></el-table-column>
        <el-table-column width="300" label="名称" prop="name"></el-table-column>
        <el-table-column width="200" label="上映时间" prop="releaseTime"></el-table-column>
        <el-table-column width="150" label="类型" prop="type"></el-table-column>
        <el-table-column width="150" label="地区" prop="region"></el-table-column>
        <el-table-column width="120" label="时长" prop="duration"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-row>
              <el-col :span="18">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
              </el-col>
              <el-col :span="6">
                <el-button size="mini" type="success" @click="getMovie">添加</el-button>
              </el-col>
            </el-row>
          </template>
          <template>
            <el-button size="mini" type="primary">详情</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8888/api'

export default {
  name: "AdminContentMovie",
  data() {
    return {
      search: '',
      data: []
    }
  },
  created() {
    this.getMovie();
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    getMovie() {
      axios({
        method: 'GET',
        url: '/film'
      }).then((result) => {
        this.data = result.data.data
        console.log(this.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>

</style>