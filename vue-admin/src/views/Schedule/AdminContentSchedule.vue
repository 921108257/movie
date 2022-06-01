<template>
<div>
  <el-row>
    <el-col :span="22" :offset="1" style="margin-top: 50px">
      <el-table :border=true size='medium' :stripe=true :data="data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
        <el-table-column width="60" label="编号" type="index" :index="indexMethod"></el-table-column>
        <el-table-column width="200" label="名称" prop="name"></el-table-column>
        <el-table-column width="80" label="座位数量" prop="seatNumber"></el-table-column>
        <el-table-column width="80" label="单价" prop="price"></el-table-column>
        <el-table-column width="80" label="类型" prop="type"></el-table-column>
        <el-table-column width="100" label="放映时间" prop="date"></el-table-column>
        <el-table-column width="100" label="开始时间" prop="startTime"></el-table-column>
        <el-table-column width="100" label="结束时间" prop="endTime"></el-table-column>
        <el-table-column width="180" label="创建时间" prop="createAt"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-row>
              <el-col :span="18">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
              </el-col>
              <el-col :span="6">
                <el-button size="mini" type="success">添加</el-button>
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
  name: "AdminContentSchedule",
  data() {
    return {
      search: '',
      data: []
    }
  },
  created() {
    this.getArrangement()
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    getArrangement() {
      axios({
        method: 'GET',
        url: '/arrangement'
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