<template>
    <main>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
            <van-swipe-item v-for="(imgUrl,index) in bannerlist" :key="index">
                <van-image
                width="100%"
                height="100%"
                :src="imgUrl"
                />
            </van-swipe-item>
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
                    <img src="../../assets/imgs/home_hb.png" alt="">
                    <span>您有150元福利待领取</span>
                </span>
                <!-- 右箭头 -->
                <span class="hs-nmfuli-right">
                    <van-icon name="arrow" />
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
                                <span class="circle">
                                    <img src="../../assets/imgs/home_wz.png" alt="">
                                </span>
                            </div>
                        </div>
                        <!-- 入住时间 -->
                        <div class="sleepTime" @click="arrivalTime"><!--点击跳转到日期选择-->
                            <div class="comegoTime">
                                <span>今天入住</span>
                                <span style="margin-left:40px">明天离店</span>
                            </div>
                            <div class="dayshow">
                                <div>
                                    <span>{{ date.selectday || '' | tostart  }}</span>
                                    <span style="margin-left:6px">&nbsp;—&nbsp;</span>
                                    <span style="margin-left:8px">{{ date.selectday || '' | toend  }}</span>
                                </div>
                                <div>
                                    <span>共{{  date.daynum || 1}}晚</span>
                                    <van-icon name="arrow" />
                                </div>
                            </div>
                        </div>
                        <!-- 搜索景点与地标 -->
                        <div class="searchArea" @click="searchArea"><!--点击跳转景区搜索页-->
                            <span>搜索北京的景点、地标、房源编号</span>
                            <span>
                                <van-icon name="arrow" />
                            </span>
                        </div>
                    </van-tab>
                    <!-- 国外 -->
                    <van-tab title="国外">
                        <div>3</div>
                        <div>4</div>
                    </van-tab>
                </van-tabs>
                <!-- 查找民宿按钮 -->
                <div class="hs-nmbutton">
                    <!-- 点击跳转到搜索列表 -->
                    <van-button type="primary" block :round="true" color="linear-gradient(90deg, #FF613C 0%, #FBA431 100%)" @click="searchList">
                        查找民宿
                    </van-button>
                </div>
            </div>
        </article>
        <article class="container11">
            <!-- 按钮区 -->
            <div class="hs-nmicon-wrap" style="padding-bottom:30px;">
                <van-grid :column-num="5" :border="false" icon-size="45px">
                    <van-grid-item v-for="(item,index) in middleShow" :key="index" :icon="item.img" :text="item.name" @click="searchType" />
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
                    <van-swipe-item v-for="(singlesw,index) in swbuttonList"  :key="index" :style="{width:'142px',marginRight:'18px'}" >
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
import thys from '../../assets/imgs/home_icon_thys.png'
import smjx from '../../assets/imgs/home_icon_smjx.png'
import zffb from '../../assets/imgs/home_icon_zffb.png'
import ins from '../../assets/imgs/home_icon_ins.png'
import qjcy from '../../assets/imgs/home_icon_qjcy.png'
import ppms from '../../assets/imgs/home_icon_ppms.png'
import whtj from '../../assets/imgs/home_icon_whtj.png'
import czxf from '../../assets/imgs/home_icon_czxf.png'
import zcz from '../../assets/imgs/home_icon_zcz.png'
import jhhp from '../../assets/imgs/home_icon_jhhp.png'
import { mapState } from 'vuex';
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
            //推荐房源列表
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
            ],
            middleShow:[{
                name:'特惠预售',
                img:thys
            },{
                name:'四木精选',
                img:smjx
            },{
                name:'做饭方便',
                img:zffb
            },{
                name:'Ins风',
                img:ins
            },{
                name:'全家出游',
                img:qjcy
            },{
                name:'品牌民宿',
                img:ppms
            },{
                name:'网红推荐',
                img:whtj
            },{
                name:'超赞新房',
                img:czxf
            },{
                name:'中长租',
                img:zcz
            },{
                name:'聚会轰趴',
                img:jhhp
            }],
            bannerlist:[],//轮播图列表
        }
    },
    components:{
        nmHouselist
    },
    async mounted(){

        //轮播图
        await this.$store.dispatch('changeBannerList');
        this.bannerlist = this.$store.state.bannerlist;
        console.log(this.date);
    },
    computed:{
        ...mapState({
            date:'date'
        }),

    },
    filters:{
        //对日期进行格式化
        toend(val){
            if(!val)return;
            const end = val.split('-')[1].split('/');
            return `${end[0]}月${end[1]}日`;
        },
        tostart(val){
            if(!val)return ;
            const start =  val.split('-')[0].split('/');
            return `${start[0]}月${start[1]}日`;
        }
    },
    methods:{
        searchArea(){//点击跳转景区搜索页
            this.$router.push({
                //路由自定义的name
                name:'spot',
                //路由
                path:'/findspots',
                //传过去的城市
                params:{
                    city:'北京'
                }
            });
        },
        arrivalTime(){//点击跳转到选择入住时间列表页
            this.$router.push('/calendar');
        },
        searchList(){//点击跳转到搜索列表页
            this.$router.push('/search');
        },
        searchType(){//点击按钮区跳转到搜索页面
            this.$router.push('/search');
        }
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
                width: 190px;
                height: 14px;
                line-height: 14px;
                font-size: 15px;
                font-weight: normal;
                color: #F98070;
                margin-left: -20px;
                display: flex;
                align-items: center;
                img{
                    width: 22px;
                    height: 22px;
                    margin-right: 10px;
                    padding-bottom: 4px;
                }
            }
            .hs-nmfuli-right{
                width: 5px;
                height: 9px;
                font-size: 12px;
                position: absolute;
                right: 19px;
                color: #F98070;
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

    // 酒店选择板块
    .sleepTime{
        height: 60px;
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        border-bottom: 0.02667rem solid #dddddd;
        .comegoTime{
            width: 100%;
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
        }
        .dayshow{
            width: 100%;
            height: 14px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            line-height: 14px;
            color: #333;
            .van-icon{
                margin-left: 4px;
                font-size: 12px;
                color: #999;
            }
        }
    }
    .searchArea{
        margin-top: 15px;
        width: 100%;
        height: 55px;
        display: flex;
        justify-content: space-between;
        span{
            font-size: 12px;
            color: #999;
        }
    }
</style>