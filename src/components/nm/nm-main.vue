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
            <!-- 搜索版块 -->
            <div class="hs-nmsearch">
                <van-tabs 
                v-model="active" 
                type="card"  
                color="#f5f5f5" 
                title-active-color="#333" 
                title-inactive-color="#333"
                >
                    <van-tab title="国内">
                        <!-- 位置 -->
                        <div class="hs-nmsearch-city">
                            <span class="city-name">
                                北京
                            </span>
                            <div class="hs-nmsearch-place">
                                <van-icon name="arrow"  />
                                <span class="place-location">我的位置</span>
                                <span class="circle"></span>
                            </div>
                        </div>
                        <!-- 入住时间 -->
                        <div class="">

                        </div>
                    </van-tab>
                    <!-- 国外 -->
                    <van-tab title="国外">
                        <div>3</div>
                        <div>4</div>
                    </van-tab>
                </van-tabs>
                <div class="hs-nmbutton">
                    <van-button type="primary" block :round="true" color="linear-gradient(90deg, #FF613C 0%, #FBA431 100%)">查找民宿</van-button>
                </div>
            </div>
        </article>
        <article class="container11">
            <!-- 按钮区 -->
            <div class="hs-nmicon-wrap">
                <van-grid :border="false">
                    <van-grid-item icon="photo-o" text="文字" />
                    <van-grid-item icon="photo-o" text="文字" />
                    <van-grid-item icon="photo-o" text="文字" />
                    <van-grid-item icon="photo-o" text="文字" />
                </van-grid>
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
    main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .my-swipe{
        width: 100%;
        height: 307px;
        color: #fff;
        background-color: #39a9ed;
    }
    .container,.container11{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .container{
        padding: 0 15px;
        margin-bottom: 21px;
    }
    .container11{
        padding: 0 10px;
        margin-top: 33px;
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