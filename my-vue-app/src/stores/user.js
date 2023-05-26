//使用pinia存储登录信息
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/login";
import {mergeCartApi} from '@/apis/cart'
import { useCartStore } from "./cartStore";
export const useUserStore = defineStore("user", () => {
    //定义
  const userInfo = ref({});
  const useCart=useCartStore();

  const getUserInfo = async (data) => {
    let res = await loginApi(data);

    if(res.code==1){
        userInfo.value=res.result;
       await mergeCartApi(useCart.cartList.map((item)=>{
          return {
            skuId:item.skuId,
            selected:item.selected,
            count:item.count
          }
        }))
        useCart.updateNewCart()
    }
  };

  //退出时，清除数据
  const clearInfo=()=>{
    userInfo.value={}
    //清空购物车的数据
    useCart.clearCart()
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
