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
            {
                path: '/coupond',
                component: () =>
                    import ("@/components/mi/mi-secondpage/coupond-secondpage.vue")
            },
            {
                path: '/redpakage',
                component: () =>
                    import ("@/components/mi/mi-secondpage/redpakage-secondpage.vue")
            }
        ],
    },
    {
        // 收藏页，查看更多跳转到=>"他们"收藏的美馆
        path: "/cl-recommend",
        component: () =>
            import ("../components/cl/cl-recommend.vue"),
    },
    {
        // 订单页面，详情页->点击立即预定按钮 =>订单填写页->点击提交点单按钮 =>支付订单页->左上角回退按钮=>提示“订单已提交成功”页->左上角回退按钮=>订单页
        // 订单页->左上角回退按钮=>我的页（/mine）
        // 我的页 ->我的订单=>订单页
        path: '/order',
        component: () =>
            import ("../views/indent.vue"),
    },
    {
        path: "/calendar",
        component: () =>
            import ("../views/calendar.vue"),
    },
    {
        path: "*",
        component: () =>
            import ("../views/notfound404.vue"),
    },
    {
        path: '/search',
        component: () =>
            import ('../views/nm-search.vue'),
    },
    {
        path: '/paypage',
        component: () =>
            import ('../views/paypage.vue'),
    },
];

const router = new VueRouter({
    routes,
});
export default router;