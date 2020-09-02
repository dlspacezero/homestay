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
<<<<<<< HEAD
  // 详情页
  {
    path: "/detail",
    component: () => import("../views/detail.vue"),
    children: [
      // 发现页：推荐、网红民宿、体验分享的详情页
      {
        path: "recommend/:id",
        component: () => import("../components/do/do-recommend.vue"),
      },
      // 发现页：特色房源的详情页
      {
        path: "special/:id",
        component: () => import("../components/do/do-special.vue"),
      },
    ],
  },
=======
>>>>>>> master
  {
    path: "*",
    component: () => import("../views/notfound404.vue"),
  },
];
const router = new VueRouter({
  routes,
});
export default router;
