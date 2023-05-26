import http from "@/utils/http";


//获取订单信息
export const getCheckoutInfoAPI = () => {
    return http({
      url:'/member/order/pre'
    })
  }

//创建订单api

export const createOrderApi=(data)=>{
  return http({
    url:"/member/order",
    method:"post",
    data
  })
}