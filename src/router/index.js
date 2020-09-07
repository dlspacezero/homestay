import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/index",
    },
    {
        path: "/home",
        component: () =>
            import ("../views/home.vue"),
        children: [{
                path: "",
                name: 'home',
                redirect: "/index",
            },
            { //首页
                path: "/index",
                name: 'home',
                component: () =>
                    import ("../views/nominate.vue"),
                children: [

                ]
            },
            { //收藏页
                path: "/collect",
                component: () =>
                    import ("../views/collect.vue"),
            },
            { //发现页
                path: "/discover",
                component: () =>
                    import ("../views/discover.vue"),
            },
            { //消息页
                path: "/message",
                component: () =>
                    import ("../views/message.vue"),
            },
            { //我的
                path: "/mine",
                component: () =>
                    import ("../views/mine.vue"),
            },
            { //优惠券
                path: '/coupond',
                component: () =>
                    import ("@/components/mi/mi-secondpage/coupond-secondpage.vue")
            },
            { //红包页
                path: '/redpakage',
                component: () =>
                    import ("@/components/mi/mi-secondpage/redpakage-secondpage.vue")
            }
        ],
    },
    {
        //日历页面
        path: "calendar",
        component: () =>
            import ("../views/calendar.vue"),
    },
    {
        // 收藏页，头部"全部城市"跳转到=>城市页
        path: "/cl-choose-city",
        component: () =>
            import ("../components/cl/cl-list-choose/cl-list-choose-city.vue"),
    },
    {
        // 收藏页，头部"排序"跳转到=>排序页
        path: "/cl-choose-sort",
        component: () =>
            import ("../components/cl/cl-list-choose/cl-list-choose-sorts.vue"),
    },
    {
        // 收藏页，查看更多跳转到=>"他们"收藏的美馆
        path: "/cl-recommend",
        component: () =>
            import ("../components/cl/cl-recommend.vue"),
    },
    {
        //填写订单页面
        path: '/addorder',
        component: () =>
            import ('../views/order.vue'),
    },
    { //支付页面
        path: '/pay',
        component: () =>
            import ('../views/payorder.vue'),
    },
    { //搜索景点页面
        path: "/findspots",
        name: 'spot',
        component: () =>
            import ("../views/findspots.vue")
    },
    {
        // 订单页面，详情页->点击立即预定按钮 =>订单填写页->点击提交点单按钮 =>支付订单页->左上角回退按钮=>提示“订单已提交成功”页->左上角回退按钮=>订单页
        // 订单页->左上角回退按钮=>我的页（/mine）
        // 我的页 ->我的订单=>订单页
        path: '/order',
        component: () =>
            import ("../views/indent.vue"),
    },
    { //日历页
        path: "/calendar",
        component: () =>
            import ("../views/calendar.vue"),
    },
    // 详情页
    {
        path: "/detail",
        // 主详情页，动态路由，多个页面的房屋列表点击可跳转=>主详情页
        component: () =>
            import ("../views/detail.vue"),
        children: [
            // 发现页：推荐、网红民宿、体验分享的详情页
            {
                path: "recommend/:id",
                component: () =>
                    import ("../components/do/do-recommend.vue"),
            },
            // 发现页：特色房源的详情页
            {
                path: "special/:id",
                component: () =>
                    import ("../components/do/do-special.vue"),
            },
            {
                path: "house/:id",
                component: () =>
                    import ("../views/maindetails.vue"),
            }
        ],
    },
    { //搜索页
        path: '/search',
        component: () =>
            import ('../views/search.vue'),
    },
    { //登录注册页面
        path: '/register',
        component: () =>
            import ('../views/register.vue')
    },
    //订单页面
    {
        path: '/order',
        component: () =>
            import ('../views/indent.vue')
    },
    { //404 not found
        path: "*",
        component: () =>
            import ("../views/notfound404.vue"),
    }
];
const router = new VueRouter({
    routes,
});
export default router;