import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      children:[
        {
          path:'',
          redirect:'/index'
        },
        {
          path:'/index',
          component:() => import("../views/nominate.vue")
        },
        {
          path:'/collect',
          component:() => import("../views/nominate.vue")
        },
        {
          path:'/discover',
          component:() => import("../views/nominate.vue")
        },
        {
          path:'/message',
          component:() => import("../views/nominate.vue")
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
