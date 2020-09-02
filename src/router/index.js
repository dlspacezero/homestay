import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    component: () => import("../views/home.vue"),
    children: [
      {
        path: "",
        redirect: "/index",
      },
      {
        path: "/index",
        component: () => import("../views/nominate.vue"),
      },
      {
        path: "/collect",
        component: () => import("../views/collect.vue"),
      },
      {
        path: "/discover",
        component: () => import("../views/discover.vue"),
      },
      {
        path: "/message",
        component: () => import("../views/message.vue"),
      },
      {
        path: "/mine",
        component: () => import("../views/mine.vue"),
      },
    ],
  },
  {
    // 收藏页，查看更多跳转到=>"他们"收藏的美馆
    path: "/cl-recommend",
    component: () => import("../components/cl/cl-recommend.vue"),
  },
  {
    path: "*",
    component: () => import("../views/notfound404.vue"),
  },
];
const router = new VueRouter({
  routes,
});
export default router;
