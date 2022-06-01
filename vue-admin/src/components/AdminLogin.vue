<template>
<div id="login">
  <el-row>
    <el-col :span="8" :offset="8">
      <h2>Cinema Admin Login Interface</h2>
      <el-divider/>
    </el-col>
  </el-row>
  <el-row style="margin-top: 40px">
    <el-col :span="8" :offset="8">
        <el-row>
          <el-col :span="18" :offset="3">
            <el-input size="small" placeholder="请输入用户名" v-model="username"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" :offset="3" style="margin-top: 30px">
            <el-input size="small" placeholder="请输入密码" v-model="password" show-password></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" :offset="3" style="margin-top: 30px">
            <el-button @click="postLogin" size="small" type="primary" plain>Login</el-button>
          </el-col>
        </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
import service from "@/request";

export default {
  name: "AdminLogin",
  data() {
    return {
      username: '',
      password: '',
      remember: false,
    }
  },
  methods: {
    Login(data) {
      return service({
        url: '/admin/login',
        method: 'post',
        data: data
      })
    },
    postLogin() {
      const LoginData = {
        username: this.username,
        password: this.password,
        remember: this.remember
      };
      console.log(LoginData);
      this.Login(LoginData).then(res => {
        localStorage.setItem("token", res.data.token);
        this.$router.push({path: '/home', replace: true})
      })
    }
  }
}
</script>

<style scoped>
#login {
  height: 100vh;
  background-image: url(../assets/1.jfif);
  background-size: cover;
}
h2 {
  text-align: center;
  color: #55efdc;
  margin-top: 200px;
  margin-bottom: 30px;
}
.el-button {
  width: 100%;
}
el-input {
  border: none;
}
</style>