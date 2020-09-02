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
import {
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    Empty,
    Button,
    Tag,
    NavBar,
    DropdownMenu,
    DropdownItem,
    Calendar,
    Grid,
    GridItem,
    Icon,
    Divider,
    Image as VanImage,
    SwipeItem,
    Swipe
} from 'vant'
import VueRouter from 'vue-router'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Empty)
Vue.use(Button)
Vue.use(Tag)
Vue.use(NavBar)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Calendar)
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(SwipeItem)
Vue.use(Swipe);



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')