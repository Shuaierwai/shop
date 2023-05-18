import { createApp } from 'vue'
// import './style.css'
import './styles/common.less'
import router from './router'

import {createPinia} from 'pinia'
// 创建 Pinia 实例
const pinia = createPinia()

import App from './App.vue'

createApp(App).use(router).use(pinia).mount('#app')
