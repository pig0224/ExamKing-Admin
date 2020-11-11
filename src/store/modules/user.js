import userApi from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    id: null,
    name: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ID: (state, id) => {
    state.id = id
  }
}

const actions = {
  // 管理员登录
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    return await userApi.login({ username: username.trim(), password: password }).then(response => {
      const { data } = response
      commit('SET_TOKEN', data.accessToken)
      setToken(data.accessToken)
      return Promise.resolve()
    }).catch(error => {
      return Promise.reject(error)
    })
  },
  // 获取管理员信息
  async getInfo({ commit, state }) {
    return await userApi.getInfo(state.token).then(response => {
      const { data } = response
      if (!data) {
        return Promise.reject('管理员授权过期，请重新登录')
      }
      data.roles = ['admin']
      data.avatar = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1194131577,2954769920&fm=26&gp=0.jpg"

      const { id, roles, avatar, username } = data
      if (!roles || roles.length <= 0) {
        return Promise.reject('getInfo: roles must be a non-null array!')
      }
      commit('SET_ID', id)
      commit('SET_ROLES', roles)
      commit('SET_NAME', username)
      commit('SET_AVATAR', avatar)
      return Promise.resolve(data)
    }).catch(error => {
      return Promise.reject(error)
    })
  },

  // 管理员退出
  logout({ commit }) {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // 删除accesstToken
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

