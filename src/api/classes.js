import request from '@/utils/request'

export default {
  // 新增班级
  create: (data) => {
    return request({
      url: '/classes/add-classes',
      method: 'post',
      data
    })
  },
  //班级列表
  list: (params) => {
    return request({
      url: '/classes/classes-list',
      method: 'get',
      params
    })
  },
  // 修改班级
  update: (data) => {
    return request({
      url: '/classes/edit-classes',
      method: 'put',
      data
    })
  },
  // 删除班级
  remove: (id) => {
    return request({
      url: '/classes/remove-classes/' + id,
      method: 'delete',
    })
  },
  // 查询班级
  find: (id) => {
    return request({
      url: '/classes/find-classes/' + id,
      method: 'get',
    })
  },
}