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
 *首页租房小组
 * @param {*} area
 * @returns
 */
export const homeGroups = (area = 'AREA|88cff55c-aaa4-e2e0') => {
  return request({
    url: '/home/groups',
    params: { area }
  })
}
/**
 *城市列表数据
 * @param {*} level
 * @returns
 */
export const areaCity = (level = 1) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

/**
 *热门城市
 * @returns
 */
export const areaHot = () => {
  return request({
    url: '/area/hot'
  })
}
/**
 *根据条件查询房屋
 * @param {*} id
 * @returns
 */
export const housesCondition = (id = 'AREA|88cff55c-aaa4-e2e0',
  area = 'AREA|88cff55c-aaa4-e2e0', subway = '', rentType = true, price = null, more = 'CHAR|76eb0532-8099-d1f4,FLOOR|1,AREA|88cff55c-aaa4-e2e0,ORIEN|61e99445-e95e-7f37,true', roomType = 'ROOM|d1a00384-5801-d5cd', oriented = 'ORIEN|61e99445-e95e-7f37',
  characteristic = 'CHAR|76eb0532-8099-d1f4', floor = 'FLOOR|1', start = '1', end = '20'
) => {
  return request({
    url: '/houses',
    params: { id, area, subway, rentType, price, more, roomType, oriented, characteristic, floor, start, end }
  })
}
/**
 *查询房屋具体信息
 * @param {/houses/{id}} id
 * @returns
 */
export const houseInfo = (id = '5cc4494549926d0e2b94c816') => {
  return request({
    url: `/houses/${id}`,
    params: { id }
  })
}
/**
 * 获取房屋查询条件
 * @param {*} id
 * @returns
 */
export const HousesCondition = () => {
  return request({
    url: '/houses/condition',
    params: { id: 'AREA|88cff55c-aaa4-e2e0' }
  })
}
