import request from '@/utils/request'

export default {
  // 创建学生
  create: (data) => {
    return request({
      url: '/student/create-student',
      method: 'post',
      data
    })
  },
  //学生列表
  list: (params) => {
    return request({
      url: '/student/student-list',
      method: 'get',
      params
    })
  },
  // 修改学生
  update: (data) => {
    return request({
      url: '/student/edit-student',
      method: 'put',
      data
    })
  },
  // 删除学生
  remove: (id) => {
    return request({
      url: '/student/remove-student/' + id,
      method: 'delete',
    })
  },
  // 查询学生
  find: (id) => {
    return request({
      url: '/student/find-student/' + id,
      method: 'get',
    })
  },
}