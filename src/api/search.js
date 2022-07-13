import request from '@/untils/request.js'
/**
 * 关键词查询小区信息
 * @param {*} id
 * @param {*} name
 * @returns
 */
export const getSuggestList = (name, id) => {
  return request({
    url: '/area/community',
    params: {
      name, id
    }
  })
}
