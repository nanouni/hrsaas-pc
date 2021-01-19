import axios from 'axios'

// 创建了axios实例，使用的是自己的配置项
const instance = axios.create({
  // 开发环境：找 env.development,找 VUE_APP_BASE_API 变量
  // 生产环境：找 env.production, 找 VUE_APP_BASE_API 变量
  baseURL: process.env.VUE_APP_BASE_API, // 环境变量
  timeout: 5000 // request timeout
})

// 请求拦截器

// 响应拦截器

export default instance
