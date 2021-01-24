import { reqLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const state = {
  // token: null // token字符串
  // 一进来优先从缓存cookie中读取
  token: getToken() // token字符串
}
const mutations = {
  // 设置token
  setToken(state, newToken) {
    state.token = newToken
    // 设置了 token 的同时，同步到本地cookies中去
    setToken(newToken)
  }
}
const actions = {
  // async login(context, data) {
  //   const res = await reqLogin(data)
  //   const newToken = res.data.data
  //   // 拿到新token，action中不能直接修改state，需要直接提交mutation
  //   context.commit('setToken', newToken)
  // }
  login(context, data) {
    return new Promise((resolve, reject) => {
      // promise中，可以封装一个异步的操作，成功的时候调用resolve，失败的时候调用reject
      reqLogin(data).then(res => {
        // 成功的逻辑
        const newToken = res.data
        // 拿到新token，actions中不能直接修改state，需要提交mutation
        context.commit('setToken', newToken)
        // 成功
        resolve(res)
      }).catch(error => {
        // 失败
        reject(error)
      })
    })
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
