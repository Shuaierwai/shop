import { createApp } from 'vue'
// import './style.css'
import './styles/common.less'
import router from './router'

import App from './App.vue'

createApp(App).use(router).mount('#app')
