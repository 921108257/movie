<template>
<div>
  <el-row>
    <el-col :span="22" :offset="1" style="margin-top: 50px">
      <el-table :border=true size='medium' :stripe=true :data="data.filter(data => !search || data.user.nickname.toLowerCase().includes(search.toLowerCase()))">
        <el-table-column width="60" label="编号" type="index" :index="indexMethod"></el-table-column>
        <el-table-column width="120" label="用户名称" prop="user.nickname"></el-table-column>
        <el-table-column width="150" label="预定电话" prop="order.phone"></el-table-column>
        <el-table-column width="120" label="预定座位" prop="order.seats"></el-table-column>
        <el-table-column width="200" label="订单时间" prop="order.createAt"></el-table-column>
        <el-table-column width="100" label="支付金额" prop="order.price"></el-table-column>
        <el-table-column width="220" label="电影名称" prop="film.name"></el-table-column>
        <el-table-column width="100" label="电影时长" prop="film.duration"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-row>
              <el-col>
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
              </el-col>
            </el-row>
          </template>
          <template slot-scope="scope">
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
  name: "AdminContentOrder",
  data() {
    return {
      search: '',
      data: []
    }
  },
  created() {
    this.getOrder();
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    getOrder() {
      axios({
        method: 'GET',
        url: '/order'
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