import http from '@/utils/http.js';

export const getLayoutNav=()=>{
    return http({
        url:'/home/category/head',
        method:"get"
    })
}