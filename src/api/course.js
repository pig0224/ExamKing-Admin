import request from '@/utils/request'

export default {
  // 新增课程
  create: (data) => {
    return request({
      url: '/course/create-course',
      method: 'post',
      data
    })
  },
  //课程列表
  list: (params) => {
    return request({
      url: '/course/course-list',
      method: 'get',
      params
    })
  },
  // 修改课程
  update: (data) => {
    return request({
      url: '/course/edit-course',
      method: 'put',
      data
    })
  },
  // 删除课程
  remove: (id) => {
    return request({
      url: '/course/remove-course/' + id,
      method: 'delete',
    })
  },
  // 查询课程
  find: (id) => {
    return request({
      url: '/course/find-course/' + id,
      method: 'get',
    })
  },
}