import http from '@/utils/http.js';
/**
 * @description:获取二级分类的接口
 * @param {*} id 
 * @returns 
 */
export const getCategoryApi=(id)=>{
    return http({
        url:'/category',
        method:"get",
        params:{
            id
        }
    })
}