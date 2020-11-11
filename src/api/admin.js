import request from '@/utils/request'

export default {
  // 管理员列表
  list: (params) => {
    return request({
      url: '/manage/admin-list',
      method: 'get',
      params
    })
  },
  // 查询管理员
  find: (id) => {
    return request({
      url: '/manage/find-admin/' + id,
      method: 'get'
    })
  },
  // 创建管理员
  create: (data) => {
    return request({
      url: '/manage/register',
      method: 'post',
      data
    })
  },
  // 更新管理员
  update: (data) => {
    return request({
      url: '/manage/edit-admin',
      method: 'put',
      data
    })
  },
  // 删除管理员
  remove: (id) => {
    return request({
      url: '/manage/remove-admin/' + id,
      method: 'delete'
    })
  },
}
