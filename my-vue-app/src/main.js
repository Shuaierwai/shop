import { createApp } from "vue";
// import './style.css'
import "./styles/common.less";
import router from "./router";

import { createPinia } from "pinia";
//pinia数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//导入图片懒加载
import { lazyPlugin } from "./directives";
//导入全局的组件插件
import { componentsPlugin } from "./components";
// 创建 Pinia 实例
const pinia = createPinia();

import App from "./App.vue";
// const app = createApp(App);
pinia.use(piniaPluginPersistedstate)
createApp(App).use(router).use(pinia).use(lazyPlugin).use(componentsPlugin).mount("#app");


