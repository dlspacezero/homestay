import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        clChooseCity: '全部城市',
        clChooseSort: '默认样式',
    },
    mutations: {
        // 收藏页获取城市名
        getClChooseCity(state, payload) {
            state.clChooseCity = payload.city;
        },
        // 收藏页获取排序参数
        getClChooseSort(state, payload) {
            state.clChooseSort = payload.sort;
        },
    },
    actions: {},
    modules: {}
})