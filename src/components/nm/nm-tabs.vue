<template>
    <div class="tabs">
        <van-tabs 
        v-model="active"
        line-width="94px"
        line-height="1px"
        >
         <van-tab :title="item.title" v-for="(item,index) in tabList" :key="index">
            <nmHouselist :list="oddsHouseList"/>
         </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import nmHouselist from "./nm-houselist"
import nmCard from '../nm/nm-card'
export default {
  data(){
    return{
        active:0,
        activeName: 'a',
        tabList:[{
            title:'天安门广场',
        },{
            title:'北京西站',
        },{
            title:'古北水镇',
        }],
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
        nmCard,
        nmHouselist
    }
};
</script>

<style lang="scss">
.tabs .van-tabs{
    margin: 0 15px;
    margin-bottom: 30px;
    .van-tabs__nav{
        background: none;
    }
    .van-tabs__wrap{
        // margin-bottom: 24px;
        .van-tab {
        width: 94px;
        padding: 0;
        flex: none;
        }
    }
    .nmCardList{
    width: 345px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    }
}
  
</style>