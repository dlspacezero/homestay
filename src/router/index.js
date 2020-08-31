import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
