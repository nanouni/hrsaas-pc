import axios from 'axios'
import { Message } from 'element-ui'

// 创建了axios实例，使用的是自己的配置项
const instance = axios.create({
  // 开发环境：找 env.development,找 VUE_APP_BASE_API 变量
  // 生产环境：找 env.production, 找 VUE_APP_BASE_API 变量
  baseURL: process.env.VUE_APP_BASE_API, // 环境变量
  timeout: 5000 // request timeout
})

// 请求拦截器
instance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
}
)

// 响应拦截器，这个项目，只要看懂了 success为false，就以为这失败了
// 失败了，就应该走.catch,而不是走.then，需要reject一下
// 响应拦截器，在响应回来，真正被.then .catch 处理之前，都会经过响应拦截器
instance.interceptors.response.use(function(response) {
  // console.log('响应拦截器', response)
  //  对响应数据做点什么
  const res = response.data
  const { message, success } = res
  if (!success) {
    // 请求失败了，给用户一个提示
    Message.error(message)
    // 一旦请求失败，不应该走.then,应该走.catch,这里应该reject一下
    return Promise.reject(new Error(message))
  }
  // 对响应数据做点什么
  return res
}, function(error) {
  console.log(error) // 方便调错
  // 服务器错误，404,500,505
  Message.error('服务器繁忙')
  //  对响应错误做点什么
  return Promise.reject(error)
})

export default instance
