import request from '@/utils/request'

export default {
  // 获取全部系别
  all: () => {
    return request({
      url: '/dept/dept-all',
      method: 'get',
    })
  }
}