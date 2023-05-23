import http from "@/utils/http";

export const loginApi=(data)=>{
    return http({
        url:'/login',
        method:'post',
        data
    })
}