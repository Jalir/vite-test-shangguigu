import { createApp } from 'vue'
import App from './App.vue'
import request from '../utils/request'

// 引入svg的注册，打包更方便
import 'virtual:svg-icons-register'

// 引入elementUi的样式表
import 'element-plus/dist/index.css'

// 引入自定义全局安装组件
import globalComponents from '@/components/index'

// 引入全局样式表
import '@/styles/index.scss'

import router from '@/router/index'
// import ElementPlus from 'element-plus'
// 引入elementUi的中文语言包
// @ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
// @ts-ignore
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// app.use(ElementPlus, {
//   locale: zhCn
// })

const app = createApp(App)

app.use(globalComponents)
app.use(router)
app.config.globalProperties.$http = request
app.mount('#app')
