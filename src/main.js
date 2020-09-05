import Vue from 'vue'

import App from './App.vue'
//vueRouter
import router from './router'
//vuex
import store from './store'
//用于设置rem基准值
import 'amfe-flexible'

import '../src/assets/style/reset.css'
import VueRouter from 'vue-router'


// 按需引入Vant组件：
import {
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    Empty,
    Button,
    Tag,
    Calendar,
    Swipe,
    SwipeItem,
    NavBar,
    DropdownMenu,
    DropdownItem,
    Grid,
    GridItem,
    Icon,
    Divider,
    Image as VanImage,
    Cell,
    CellGroup,
    Card,
    Dialog,
    Toast,
    SwipeCell,
    CouponCell,
    CouponList,
    Search,
    Popup,
    ShareSheet
} from 'vant';

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
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Tag);
Vue.use(NavBar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Calendar);
Vue.use(SwipeCell);
Vue.use(SwipeItem)
Vue.use(Swipe);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Search);
Vue.use(Popup);
Vue.use(Card);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(ShareSheet);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')