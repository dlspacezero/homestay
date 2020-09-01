import Vue from 'vue'

import App from './App.vue'
//vueRouter
import router from './router'
//vuex
import store from './store'
//用于设置rem基准值
import 'amfe-flexible'
import '../src/assets/style/reset.css'
import "@/assets/font_mine/iconfont.css"

// 按需引入Vant组件：
import { Tabbar, TabbarItem, Grid, GridItem, Icon, Divider, NavBar, Image as VanImage, Button } from 'vant'
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')