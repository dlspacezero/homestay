import Vue from 'vue'

import App from './App.vue'
//vueRouter
import router from './router'
//vuex
import store from './store'
//用于设置rem基准值
import 'amfe-flexible'


// 按需引入Vant组件：
import { Tabbar, TabbarItem, NavBar, Search, Icon, Popup, Cell, Calendar, DropdownMenu, DropdownItem, Swipe, SwipeItem, Field, PasswordInput, NumberKeyboard, RadioGroup, Radio } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(Calendar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Field);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Radio);
Vue.use(RadioGroup);
import '../src/assets/style/reset.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')