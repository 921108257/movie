<template>
<div>
  <el-row style="background-color: #545c64">
    <el-col :span="4">
      <h2 style="color: aqua; text-align: center">小小影院管理系统</h2>
    </el-col>
    <el-col :span="3" :offset="14">
      <el-row>
        <el-col :span="8" :offset="4" style="text-align: center">
          <el-avatar :size="50" :src="url"></el-avatar>
        </el-col>
        <el-col :span="12" style="margin-top: 10px">
          <el-link type="primary" disabled><h3>Admin</h3></el-link>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="3" style="text-align: left;margin-top: 25px">
      <el-link type="danger" @click="handleLogout" :underline="false"><i class="el-icon-switch-button"></i>退出登录</el-link>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4">
      <AdminLeftNav/>
    </el-col>
    <el-col :span="20">
      <AdminContent/>
    </el-col>
  </el-row>
</div>
</template>

<script>
import AdminLeftNav from "@/views/AdminLeftNav";
import AdminContent from "@/views/AdminContent";

export default {
  name: "AdminHome",
  components: {
    AdminLeftNav,
    AdminContent
  },
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("uid")
      localStorage.removeItem("token")
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.el-avatar {
  margin-top: 11px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>