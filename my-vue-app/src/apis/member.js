import http from "@/utils/http";
/**
 * @description:猜你喜欢接口
 * @param {*} param0 
 * @returns 
 */
export const getUserLikeOrder=({limit=4})=>{
    return http({
        url:"/goods/relevant",
        method:'get',
        params: {
            limit 
          }
    })
}

/*
params: {
  orderState:0,
  page:1,
  pageSize:2
}
*/
/**
 * @description:获取订单的接口
 * @param {*} params 
 * @returns 
 */

export const getUserOrder = (params) => {
    return http({
      url:'/member/order',
      method:'get',
      params
    })
  }