// initial state
const state = {
  sexEnum: [{ key: 0, value: '男' }, { key: 1, value: '女' }, { key: 2, value: '保密' }],
  statusEnum: [{ key: 1, value: '启用' }, { key: 0, value: '禁用' }],
}

// getters
const getters = {
  enumFormat: () => (arrary, key) => {
    return format(arrary, key)
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

const format = function (array, key) {
  for (let item of array) {
    if (item.key === key) {
      return item.value
    }
  }
  return null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
