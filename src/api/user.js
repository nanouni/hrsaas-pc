import request from '@/utils/request'

// 登录请求
export function reqLogin(data) {
  return request({
    method: 'post',
    // /api 说明请求自己，走代理，其实所有的请求，都要走代理，所有的请求都希望以 /api 开头
    // 可以配置baseUrl，同意添加 /api 前缀
    url: '/sys/login',
    data
  })
}

export function getInfo(token) {

}

export function logout() {

}
