import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/index",
    },
    {
        path: "/login",
        component: () =>
            import ("../views/login.vue"),
    },
    {
        path: "/home",
        component: () =>
            import ("../views/home.vue"),
        children: [{
                path: "",
                redirect: "/index",
            },
            {
                path: "/index",
                component: () =>
                    import ("../views/nominate.vue"),
                children: [
                    

                ]
            },
            {
                path: "/collect",
                component: () =>
                    import ("../views/collect.vue"),
            },
            {
                path: "/discover",
                component: () =>
                    import ("../views/discover.vue"),
            },
            {
                path: "/message",
                component: () =>
                    import ("../views/message.vue"),
            },
            {
                path: "/mine",
                component: () =>
                    import ("../views/mine.vue"),
            },
            
        ],
    },
    {
        path: '/search',
        component: () =>
            import ('../views/nm-search.vue'),
    },
    {
        path: '/register',
        component: () =>
            import ('../views/mine-register.vue'),
    },
    {
        path: "*",
        component: () =>
            import ("../views/notfound404.vue"),
    },
];
const router = new VueRouter({
    routes,
});
export default router;