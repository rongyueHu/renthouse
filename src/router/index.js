import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'// 父页面不用懒加载
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Search = () => import('@/views/Search')
const Info = () => import('@/views/Info')
const Login = () => import('@/views/Login')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'my', component: My },
      { path: 'search', component: Search },
      { path: 'info', component: Info }
    ]
  },
  {
    path: '/user',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
