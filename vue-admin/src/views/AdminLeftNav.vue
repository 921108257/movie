<template>
<div id="LeftNav">
  <el-row>
    <el-col>
      <el-menu background-color="#545c64" text-color="white" active-text-color="#00FFFFFF" default-active="1" style="height: 90vh;" :router=true>
        <el-menu-item route="/home" index="1"><i class="el-icon-s-home"></i>网站首页</el-menu-item>
        <el-menu-item route="/movie" index="2"><i class="el-icon-video-camera-solid"></i>电影列表</el-menu-item>
        <el-menu-item route="/schedule" index="3"><i class="el-icon-s-promotion"></i>电影排片</el-menu-item>
        <el-menu-item route="/order" index="4"><i class="el-icon-s-order"></i>订单列表</el-menu-item>
        <el-menu-item route="/user" index="5"><i class="el-icon-s-custom"></i>用户列表</el-menu-item>
        <el-menu-item route="/setting" index="6"><i class="el-icon-s-operation"></i>系统设置</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "AdminLeftNav"
}
</script>

<style scoped>
.el-col {
  height: 10vh;
}
.el-menu-item {
  margin-left: 40px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>