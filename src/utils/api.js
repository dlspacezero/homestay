import {http}  from "./http.js";
//发送请求获取轮播图数据
export function getBannerList(){
    return http.get('/home/banner');
}

// 获取发现页-推荐数据
export function getDiscoverList(){
    return http.get('/discover/youlike');
}