//使用pinia存储登录信息
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/login";
export const useUserStore = defineStore("user", () => {
    //定义
  const userInfo = ref({});
  const getUserInfo = async (data) => {
    let res = await loginApi(data);

    if(res.code==1){
        userInfo.value=res.result
    }
  };

  //退出时，清除数据
  const clearInfo=()=>{
    userInfo.value={}
  }

  return {
    userInfo,
    getUserInfo,
    clearInfo
  }
},
{
    persist: true,
  }
);
