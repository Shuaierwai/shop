import http from '@/utils/http.js';
//加入购物车
export const insertCartAPI=(data)=>{
    return http({
        url:"/member/cart",
        method:"post",
        data
    })
}

//获取到最新的接口
export const getNewCartApi=()=>{
    return http({
       url:'/member/cart',
       method:"get"
    })
}

//删除购物车
export const delCartApi=(ids)=>{
    return http({
        url:'/member/cart',
        method:'delete',
        data:{
            ids
        }
    })
}

//合并购物车
export const mergeCartApi=(data)=>{
    return http({
        url:'/member/cart/merge',
        method:'post',
        data

    })
}