import request from '@/utils/request'

export default {
  login: (data) => {
    return request({
      url: '/manage/login',
      method: 'post',
      data
    })
  },
  getInfo: () => {
    return request({
      url: '/manage/info',
      method: 'get'
    })
  }
}