import request from '@/utils/request'

export default {
  // 教师列表
  list: (params) => {
    return request({
      url: '/teacher/teacher-list',
      method: 'get',
      params
    })
  },
}