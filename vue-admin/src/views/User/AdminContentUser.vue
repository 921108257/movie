<template>
  <el-row>
    <el-col :span="22" :offset="1" style="margin-top: 50px">
      <div>
        <el-table :border=true size='medium' :stripe=true :data="data.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))">
          <el-table-column width="60" label="编号" type="index" :index="indexMethod"></el-table-column>
          <el-table-column width="150" label="用户名称" prop="username"></el-table-column>
          <el-table-column width="120" label="用户昵称" prop="nickname"></el-table-column>
          <el-table-column width="200" label="用户邮箱" prop="email"></el-table-column>
          <el-table-column width="120" label="出生日期" prop="birthday"></el-table-column>
          <el-table-column width="120" label="用户性别" prop="gender"></el-table-column>
          <el-table-column width="200" label="创建时间" prop="createAt"></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-row>
                <el-col>
                  <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
                </el-col>
              </el-row>
            </template>
            <template>
              <el-button size="mini" type="primary">详情</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</template>

<script>

import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8888/api'

export default {
  name: "AdminContentUser",
  data() {
    return {
      search: '',
      data: []
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    getUser() {
      axios({
        method: 'GET',
        url: '/user'
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