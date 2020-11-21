/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function ValidateMsg(data) {
  var tips = "系统异常"
  if (data) {
    if (typeof (data) == 'string') {
      tips = data
    } else if (Object.prototype.toString.call(data) === `[object Object]`) {
      var fileds = Object.keys(data)
      if (fileds.length > 0) {
        var errorObj = data[fileds[fileds.length - 1]]
        tips = errorObj[errorObj.length - 1]
      }
    }
  }
  return tips
}