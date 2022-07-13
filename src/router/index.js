import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'// 父页面不用懒加载
const Home = () => import('@/views/Home')// 首页
const My = () => import('@/views/My')// 我的
const Search = () => import('@/views/Search')// 找房
const Info = () => import('@/views/Info')// 资讯
const Login = () => import('@/views/Login')// 登录
const Register = () => import('@/views/Register')// 注册
const Map = () => import('@/views/Map')// 百度地图
const Relase = () => import('@/views/Relase')// 发布房源
const CityList = () => import('@/views/CityList')// 城市列表
const Collection = () => import('@/views/Collection')// 我的收藏
const HouseInfo = () => import('@/views/HouseInfo')// 具体房源
const SearchInfo = () => import('@/views/SearchInfo')// 搜索房源

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
  },
  {
    path: '/relase',
    component: Relase
  }, {
    path: '/citylist',
    component: CityList
  }, {
    path: '/collection',
    component: Collection
  }, {
    path: '/houseinfo',
    component: HouseInfo
  }, {
    path: '/searchinfo',
    component: SearchInfo
  }

]

const router = new VueRouter({
  routes
})

export default router
