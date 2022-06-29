import request from '@/untils/request.js'
/**
 *首页轮播图
 * @returns
 */
export const homeSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}
/**
 *租房小组
 * @param {*} area
 * @returns
 */
export const homeGroups = (area) => {
  return request({
    url: '/home/groups',
    params: area
  })
}
