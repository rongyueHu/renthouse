import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'// 父页面不用懒加载
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Search = () => import('@/views/Search')
const Info = () => import('@/views/Info')
const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const Map = () => import('@/views/Map')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'my', component: My },
      { path: 'search', component: Search },
      { path: 'info', component: Info }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/map',
    component: Map
  }
]

const router = new VueRouter({
  routes
})

export default router
