import request from '@/untils/request.js'
/**
 *
 * @param {地区的name值} name
 * @returns
 */
export const getCityInfo = (name) => {
  return request({
    url: '/area/info',
    params: {
      name
    }
  })
}
