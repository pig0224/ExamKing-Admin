import request from '@/utils/request'

export default {
  // 获取全部系别
  all: () => {
    return request({
      url: '/dept/dept-all',
      method: 'get',
    })
  },
  // 新增系别
  create: (data) => {
    return request({
      url: '/dept/add-dept',
      method: 'post',
      data
    })
  },
  // 系别列表
  list: (params) => {
    return request({
      url: '/dept/dept-list',
      method: 'get',
      params
    })
  },
  // 修改系别
  update: (data) => {
    return request({
      url: '/dept/edit-dept',
      method: 'put',
      data
    })
  },
  // 删除系别
  remove: (id) => {
    return request({
      url: '/dept/remove-dept/' + id,
      method: 'delete',
    })
  },
  // 查询系别
  find: (id) => {
    return request({
      url: '/dept/find-dept/' + id,
      method: 'get',
    })
  },
}