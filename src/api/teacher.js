import request from '@/utils/request'

export default {
  // 新增班级
  create: (data) => {
    return request({
      url: '/teacher/create-teacher',
      method: 'post',
      data
    })
  },
  //班级列表
  list: (params) => {
    return request({
      url: '/teacher/teacher-list',
      method: 'get',
      params
    })
  },
  // 修改班级
  update: (data) => {
    return request({
      url: '/teacher/edit-teacher',
      method: 'put',
      data
    })
  },
  // 删除班级
  remove: (id) => {
    return request({
      url: '/teacher/remove-teacher/' + id,
      method: 'delete',
    })
  },
  // 查询班级
  find: (id) => {
    return request({
      url: '/teacher/find-teacher/' + id,
      method: 'get',
    })
  },
}