<template>
    <main>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 轮播图以下内容 -->
        <article class="container hs-nm-main" >
            <!-- 福利领取 -->
            <div class="hs-nmfuli">
                <!-- 红包icon -->
                <span class="hs-nmfuli-red">

                </span>
                <!-- 文字 -->
                <span class="hs-nmfuli-text">
                    您有150元福利待领取
                </span>
                <!-- 右箭头 -->
                <span class="hs-nmfuli-right">

                </span>
            </div>
            <div class="hs-nmsearch">
                <van-tabs 
                v-model="active" 
                type="card"  
                color="#f5f5f5" 
                title-active-color="#333" 
                title-inactive-color="#333">
                    <van-tab title="标签 1">国内</van-tab>
                    <van-tab title="标签 2">国外</van-tab>
                </van-tabs>
            </div>
        </article>
    </main>
</template>

<script>
export default {
    data(){
        return {
            active:2
        }
    },
    components:{
        
    }
};
</script>
<style lang="scss" scoped>
    @import "../../assets/style/command.scss";
    @import "../../assets/style/nominate.css";
    .my-swipe{
        width: 100%;
        height: 307px;
        color: #fff;
        background-color: #39a9ed;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 15px;
    }
    .hs-nm-main{
        position: relative;
        z-index: 10;
        top: -79px;
        .hs-nmfuli{
            height: 49px;
            width: 345px;
            background: #F8F4F3;
            opacity: 0.86;
            border-radius: 10px;
            display: flex;
            align-items: center;
            position: relative;
            .hs-nmfuli-red{
                margin-left: 18px;
                width: 20px;
                height: 20px;
            }
            .hs-nmfuli-text{
                width: 150px;
                height: 14px;
                font-size: 15px;
                font-weight: normal;
                color: #F98070;
                margin-left: 10px;
            }
            .hs-nmfuli-right{
                width: 5px;
                height: 9px;
                position: absolute;
                right: 19px;
            }
        }
        .hs-nmsearch{
            margin-top: 8px;
            width: 100%;
            height: 225px;
            background: #FFFFFF;
            box-shadow: 0px 9px 14px 2px rgba(178, 177, 179, 0.36);
            border-radius: 10px;
        }

    }
</style>