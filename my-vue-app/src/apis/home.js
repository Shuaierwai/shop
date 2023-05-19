import http from '@/utils/http.js';
/**
 * 获取轮播图接口
 * @returns 
 */
export const getBanner=()=>{
    return http({
        url:'home/banner',
        method:'get'
    })
}
/**
 * @description：获取新鲜好物接口
 * @returns 
 */
export const getNewApi=()=>{
    return http({
        url:'/home/new',
        method:'get'
    })
}


/**
 * @description:人气推荐接口
 * @returns 
 */
export const getHotApi=()=>{
    return http({
        url:'/home/hot',
        method:'get'
    })
}
/**
 * @description:产品列表的接口
 * @returns 
 */
export const getProductApi=()=>{
  return http({
    url:'/home/goods',
    method:'get'
  })
}