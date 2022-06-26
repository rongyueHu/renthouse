import request from '@/untils/request.js'
export const login = ({ text, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      text, password
    }
  })
}
