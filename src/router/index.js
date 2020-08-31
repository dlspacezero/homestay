import Vue from "vue";
import VueRouter from "vue-router";

<<<<<<< HEAD
Vue.use(VueRouter);
=======
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
          component:() => import("../views/collect.vue")
        },
        {
          path:'/discover',
          component:() => import("../views/discover.vue")
        },
        {
          path:'/message',
          component:() => import("../views/message.vue")
        }
      ]
    }
]
>>>>>>> cf4b5286a8446ddc727e7b164c922a53102a02e2

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  // {
  //   path: "/login",
  //   component: () => import("../views/Login.vue"),
  // },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        redirect: "/index",
      },
      {
        path: "/index",
        component: () => import("../views/Recommend.vue"),
      },
      {
        path: "/collect",
        component: () => import("../views/Collect.vue"),
      },
      {
        path: "/discover",
        component: () => import("../views/Discover.vue"),
      },
      {
        path: "/message",
        component: () => import("../views/Message.vue"),
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("../views/Notfound404.vue"),
  },
];
const router = new VueRouter({
  routes,
});
export default router;
