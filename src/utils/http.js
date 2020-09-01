import axios from "axios";
// import { reject } from "core-js/fn/promise";
//公共配置
const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
});
//响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export const http = {
    get(url,params){
        return new Promise((resolve,reject)=>{
            instance.get(url,params).then(res => {
                resolve(res);
            }).catch(err=>{
                reject(err)
            });
        });
    },
    post(url,params){
        return new Promise((resolve,reject)=>{
            instance.post(url,params).then(res => {
                resolve(res);
            }).catch(err=>{
                reject(err)
            });
        });
    }
};