import Vue from "vue";

import App from "./App.vue";
//vueRouter
import router from "./router";
//vuex
import store from "./store";
//用于设置rem基准值
import 'amfe-flexible'

import '../src/assets/style/reset.css'
// import VueRouter from 'vue-router'

import "../src/assets/style/reset.css";
// 引入发现页icon-font：
import '@/assets/font_discover/iconfont.css'

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
    Field,
    ShareSheet,
    PasswordInput,
    NumberKeyboard,
    RadioGroup,
    Radio,
    IndexBar, 
    IndexAnchor,
    PullRefresh
} from 'vant';
Vue.use(IndexAnchor);
Vue.use(IndexBar);
Vue.use(ShareSheet);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Empty);
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(VanImage);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(Calendar);
Vue.use(SwipeCell);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);
Vue.use(Search);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Popup);
Vue.use(Card);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(PullRefresh);
import '../src/assets/style/reset.css'


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
