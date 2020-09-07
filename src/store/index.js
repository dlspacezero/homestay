import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//导入获取数据的方法
import { getBannerList ,getDiscoverList} from "../utils/api";
export default new Vuex.Store({
    state: {
        clChooseCity: '全部城市',
        clChooseSort: '默认样式',
        //首页轮播图图片数组
        bannerlist:[],
        //首页选择日期
        date:{
            //应该会有这些属性
            //start
            //end
            //status
        }
    },
    mutations: {
        //更新state属性
        updateState(state,payload){
            //payload===>{ 'key' : "value"} key对应state里属性名
            //拿到payload键的数组，遍历数组
            Object.keys(payload).forEach((key)=>{
                //给state里与key同名的属性赋值
                state[key] = payload[key];
            });
        },
        // 收藏页获取城市名
        getClChooseCity(state, payload) {
            state.clChooseCity = payload.city;
        },
        // 收藏页获取排序参数
        getClChooseSort(state, payload) {
            state.clChooseSort = payload.sort;
        },
    },
    actions: {
        //获取首页轮播图数据
        async changeBannerList({ commit },payload){
            //调用api方法发送请求获取数据
            const response = await getBannerList();
            //commit 触发updateState更新属性
            commit('updateState',{
                'bannerlist' : response.data.result.list
            // console.log(response.data.result.list);
            });
        },
        // 获取发现页-推荐、网红、体验数据
        async changeDiscoverList({ commit },payload){
            //调用api方法发送请求获取数据
            const response = await getDiscoverList();
            // console.log(response.data.result.articlelist);
            //commit 触发updateState更新属性
            commit('updateState',{
                'discoverlist' : response.data.result.articlelist
            });
        }
    },
    modules: {}
})