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

/**
 * @param {string} str
 * @returns {Boolean}
 */

//  提供一个手机号的验证方法
export function validateMobile(str) {
  return /^1[3-9]\d{9}$/.test(str)
}
