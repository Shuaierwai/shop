import http from "@/utils/http";

//获取订单数据

export const getOrderApi=(id)=>{
    return http({
        url:`/member/order/${id}`,
        method:"get"
    })
}