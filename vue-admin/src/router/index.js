import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '../components/AdminLogin'
import AdminHome from "@/components/AdminHome";
import AdminContentHome from "@/views/Home/AdminContentHome";
import AdminContentMovie from "@/views/Movie/AdminContentMovie";
import AdminContentSchedule from "@/views/Schedule/AdminContentSchedule";
import AdminContentOrder from "@/views/Order/AdminContentOrder";
import AdminContentUser from "@/views/User/AdminContentUser";
import AdminContentSetting from "@/views/Setting/AdminContentSetting";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: AdminLogin
  },
  {
    path: '/home',
    name: 'home',
    component: AdminHome,
    children: [
      {
        path: '/home',
        name: 'home',
        component: AdminContentHome
      },
      {
        path: '/movie',
        name: 'movie',
        component: AdminContentMovie
      },
      {
        path: '/schedule',
        name: 'schedule',
        component: AdminContentSchedule
      },
      {
        path: '/order',
        name: 'order',
        component: AdminContentOrder
      },
      {
        path: '/user',
        name: 'user',
        component: AdminContentUser
      },
      {
        path: '/setting',
        name: 'setting',
        component: AdminContentSetting
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
