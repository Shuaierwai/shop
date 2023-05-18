import {defineStore} from 'pinia';
import {getLayoutNav} from '@/apis/layout'
import {reactive}from 'vue'

export const useCategory = defineStore('getNav', ()=>{
    // 组合式
    let data=reactive({
        navData:[]
     })

     let getLayoutNavData=async()=>{
        let res=await getLayoutNav();
        console.log(res);
        if(res.code==1){
          data.navData=res.result;
          console.log(data.navData);
        }
     }

     return{
        data,
        getLayoutNavData
     }
})