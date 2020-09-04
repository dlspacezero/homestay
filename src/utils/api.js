import {http}  from "./http.js";
//发送请求获取轮播图数据
export function getBannerList(){
    return http.get('/bannerlist');
}