//对axios做一些简单封装
import axios from "axios";

const http=axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

//拦截器
// axios请求拦截器
http.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default http