import Vue from 'vue'

import App from './App.vue'
//vueRouter
import router from './router'
//vuex
import store from './store'
//用于设置rem基准值
import 'amfe-flexible'
import '../src/assets/style/reset.css'

// 按需引入Vant组件：
import {
   Tabbar, 
   TabbarItem, 
   Image as VanImage,
   Swipe, 
   SwipeItem,
   Button,
   Tab, 
   Tabs,
   Icon,
   Grid,
  GridItem
} from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(VanImage);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
