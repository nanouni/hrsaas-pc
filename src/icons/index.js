import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
/* <svg-icon></svg-icon> */
Vue.component('svg-icon', SvgIcon)

// require.context 可以批量导入模块
// require.context 函数可以接受三个参数
// 1.directory{string} - 读取文件的路径
// 2.useSubdirectories {Boolean} - 是否遍历文件的子目录
// 3.regExp{RegExp} -匹配文件的正则
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// 上面这三行代码，在批量的导入svg文件夹下的文件
