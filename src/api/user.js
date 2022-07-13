import request from '@/untils/request.js'
/* 登录 */
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username, password
    }
  })
}
/**
 *获取用户个人资料
 * @returns
 */
export const getUserInfo = () => {
  return request({
    url: '/user'
  })
}
/**
 *我的收藏
 * @returns
 */
export const getUserCollection = () => {
  return request({
    url: '/user/favorites'
  })
}
