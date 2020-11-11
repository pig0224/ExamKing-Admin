import request from '@/utils/request'

// 管理员列表
export function list(params) {
  return request({
    url: '/manage/admin-list',
    method: 'get',
    params
  })
}

// 创建管理员
export function create(data) {
  return request({
    url: '/manage/register',
    method: 'post',
    data
  })
}

// 更新管理员
export function update(data) {
  return request({
    url: '/manage/edit-admin',
    method: 'put',
    data
  })
}

// 删除管理员
export function remove(id) {
  return request({
    url: '/manage/remove-admin/' + id,
    method: 'delete'
  })
}
