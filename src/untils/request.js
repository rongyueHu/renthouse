import axios from 'axios' // 导入axios
const instance = axios.create({ // 创建axios实例instance
  baseURL: 'http://liufusong.top:8080/', // 基础接口
  timeout: 5000 // 响应时间5s，超出报错
})
export default instance // 导出axios实例
