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
                <van-grid :column-num="5" :border="false" icon-size="45px">
                    <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="特惠预售"  />
                </van-grid>
            </div>
        </article>
        <!-- 特惠好房 -->
        <article class="container hs-nmodds">
            <!-- 标题 -->
            <van-cell-group :border="false">
                <van-cell title="特惠好房" value="MUNIAO" />
            </van-cell-group>
            <div class="swipe-button">
                <!-- 滑块 -->
                <van-swipe :loop="false"  :show-indicators="false" width="154">
                    <van-swipe-item v-for="(singlesw,index) in swbuttonList" :key="index" :style="{width:'142px',marginRight:'18px'}">
                        <h2>{{singlesw.title}}</h2>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <nmHouselist :list="oddsHouseList" />
        </article>
    </main>
</template>

<script>
import nmHouselist from "./nm-houselist";
export default {
    data(){
        return {
            active:2,
            swbuttonList:[
                {
                    title:'今夜特价',
                    text:'今夜预订，立享优惠'
                },
                {
                    title:'新房特惠',
                    text:'特价新房先到先得'
                },
                {
                    title:'今夜特价',
                    text:'今夜预订，立享优惠'
                },
                {
                    title:'新房特惠',
                    text:'特价新房先到先得'
                }
            ],
            oddsHouseList:[
                {
                    imgUrl:'https://bkimg.cdn.bcebos.com/pic/43a7d933c895d14391c671507cf082025aaf0714?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5',
                    city:'北京',
                    copy:'今夜预订立享',
                    info:'整租-1居室-宜租2人',
                    price:298,
                    address:'地铁上岸站长安天街呃呃呃呃呃呃呃呃呃呃'
                },
                {
                    imgUrl:'https://bkimg.cdn.bcebos.com/pic/43a7d933c895d14391c671507cf082025aaf0714?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5',
                    city:'北京',
                    copy:'今夜预订立享',
                    info:'整租-1居室-宜租2人',
                    price:298,
                    address:'地铁上岸站长安天街呃呃呃呃呃呃呃呃呃呃'
                },
                {
                    imgUrl:'https://bkimg.cdn.bcebos.com/pic/43a7d933c895d14391c671507cf082025aaf0714?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5',
                    city:'北京',
                    copy:'今夜预订立享',
                    info:'整租-1居室-宜租2人',
                    price:298,
                    address:'地铁上岸站长安天街呃呃呃呃呃呃呃呃呃呃'
                },
                {
                    imgUrl:'https://bkimg.cdn.bcebos.com/pic/43a7d933c895d14391c671507cf082025aaf0714?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5',
                    city:'北京',
                    copy:'今夜预订立享',
                    info:'整租-1居室-宜租2人',
                    price:298,
                    address:'地铁上岸站长安天街呃呃呃呃呃呃呃呃呃呃'
                },
            ]
        }
    },
    components:{
        nmHouselist
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
        margin-top: 54px;
    }
    .hs-nm-main{
        position: relative;
        z-index: 10;
        margin-top: -79px;
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