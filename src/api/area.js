import request from '@/untils/request.js'
// 城市列表
export const areaCity = () => {
  return request({
    url: '/area/city'
  })
}
