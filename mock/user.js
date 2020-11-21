const loginData = {
  "id": 1,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIklzQWRtaW4iOnRydWUsImlhdCI6MTYwNDk5MzIzMiwibmJmIjoxNjA0OTkzMjMyLCJleHAiOjE2NTY4MzMyMzIsImlzcyI6ImRvdG5ldGNoaW5hIiwiYXVkIjoicG93ZXJieSBGdXIifQ.DfLr62maZJg5CVufqW0aZrC44QiHeMyYaEEDRKGuWA4"
}

const adminInfo = {
  "id": 1,
  "username": "admin",
  "createTime": "2020-11-10 04:04:00"
}

module.exports = [
  // 管理员登录
  {
    url: '/manage/login',
    type: 'post',
    response: () => {
      return {
        statusCode: 200,
        data: loginData,
        successed: true,
        errors: null,
        extras: null
      }
    }
  },

  // 获取管理员信息
  {
    url: '/manage/info',
    type: 'get',
    response: () => {
      return {
        statusCode: 200,
        data: adminInfo,
        successed: true,
        errors: null,
        extras: null
      }
    }
  }
]
