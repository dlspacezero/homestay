<template>
    <div class="hs-findContainer">
        <!-- 顶部标题 -->
        <section class="hs-findTitle">
          <p>发现</p>
        </section>
        <!-- 主体部分 -->
        <main class="hs-main">
            <nav class="hs-findNav van-hairline--bottom">
                <li>
                    <a href="">推荐</a>
                </li>
                <li>
                    <a href="">网红名宿</a>
                </li>
                <li>
                    <a href="">体验分享</a>
                </li>
                <li>
                    <a href="">特色分享</a>
                </li>
            </nav>
            <van-swipe @change="onChange" class="my-swipe" :loop=false>
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0,
        }
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
    },
}
</script>
<style lang="scss" >
    // 整体布局
    .hs-findContainer {
        display: flex;
        flex-direction: column;
        // 顶部样式
        .hs-findTitle {
            width: 100%;
            height: 44px;
            display: flex;
            p {
                display: flex;
                align-items: center;
                margin-left: 15px;
                font-weight: bold;
                font-size: 27px;
            }
        }
        //主体样式
        .hs-main {
            //主体内容轮播样式
            .my-swipe .van-swipe-item {
                color: #fff;
                font-size: 20px;
                line-height: 150px;
                text-align: center;
            }
            //主体内容导航样式
            .hs-findNav {
                display: flex;
                list-style: none;
                height: 49px;
                align-items: center;
                margin-top: 2px;
                justify-content: space-around;
                border-top: none;
                li {
                    a {
                        font-size: 15px;
                        color: #999;
                        font-family: PingFang;
                        font-weight: 500;
                    }
                }
            }
        }
    }


</style>