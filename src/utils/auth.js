import Cookies from 'js-cookie'
// 插件: js-cookie, 原生的cookie操作非常麻烦, 不会原生直接操作cookie
// 你要操作cookie, 就引入插件js-cookie
// 1. 获取值 Cookies.get('键名')          localStorage.getItem('键名')
// 2. 设置值 Cookies.set('键名', '值')    localStorage.setItem('键名', '值')
// 3. 移出值 Cookies.remove('键名')       localStorage.removeItem('键名')
// token存储键名
const TokenKey = 'hrsaas_pc_token'

export function getToken() {
  return Cookies.get(TokenKey) || null
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
