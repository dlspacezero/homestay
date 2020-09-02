import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

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
    path: "*",
    component: () => import("../views/notfound404.vue"),
  },
  {
    path: "/discover/detail/:id",
    component: () => import("../components/do/do-detail.vue"),
  },
];
const router = new VueRouter({
  routes,
});
export default router;
