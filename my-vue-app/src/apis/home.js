import http from '@/utils/http.js';
/**
 * 获取轮播图接口
 * @returns 
 * 首页和分类的轮播图一样的，只是传入参数不一样
 */
export const getBanner=(params={})=>{
    const {distributionSite='1'}=params
    return http({
        url:'home/banner',
        method:'get',
        params:{
            distributionSite
        }
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