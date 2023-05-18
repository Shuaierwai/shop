import http from '@/utils/http.js';

export const getBanner=()=>{
    return http({
        url:'home/banner',
        method:'get'
    })
}