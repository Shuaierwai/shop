//对axios做一些简单封装
//登录失败是在响应展示相关提示
//拦截器携带token
import axios from "axios";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const http=axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

//拦截器
// axios请求拦截器
//配置携带token
http.interceptors.request.use(config => {
    //1.在pinia获取到token
     const userStore=useUserStore();
    //按照后端的要求拼接token数据
     const token=userStore.userInfo.token;
     if(token){
        config.headers.Authorization = `Bearer ${token}`
     }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
    const userStore=useUserStore();
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })

    //401token失效处理  清除信息，跳转到登录页
    if(e.response.status==401){
        userStore.clearInfo();
        router.push('/login');
    }
    return Promise.reject(e)
})

export default http