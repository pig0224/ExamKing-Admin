import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { ValidateMsg } from '@/utils/validate'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = "Bearer " + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const status = response.status
    const res = response.data

    if (status == 200) {
      if (res.successed == false) {
        // 异常和验证处理
        Message({
          message: ValidateMsg(res.errors) || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(new Error(ValidateMsg(res.errors)))
      }
      return res
    } else if (status == 401) {
      // 重新登录
      MessageBox.confirm('登录状态过期，是否重新登录？', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/logout').then(() => {
          location.reload()
        })
      })
    } else {
      // 异常和验证处理
      Message({
        message: 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error('Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: ValidateMsg('Error'),
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
