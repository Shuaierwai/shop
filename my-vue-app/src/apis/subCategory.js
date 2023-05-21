import http from "@/utils/http"

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
    return http({
      url:'/category/sub/filter',
      method:'get',
      params:{
        id
      }
    })
}
/**
 * @description:获取二级目录下商品列表的接口
 * @param {*} data 
 * @returns 
 */
export const getCategoryGoodsAPI=(data)=>{
   return http({
    url:'/category/goods/temporary',
    method:"post",
    data
   })
}