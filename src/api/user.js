import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/manage/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/manage/info',
    method: 'get'
  })
}