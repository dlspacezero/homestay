<template>
    <div class="selfCredit">
        <div class="wrap">
            <van-grid :column-num="4"  :border="false">
            <van-grid-item v-for="(item,index) in dataList" :key="index"   >
                <!-- <span :class="item.icon"  class="iconfont"></span> -->
                <img :src="item.icon" alt="">
                <p>{{item.title}}</p>
            </van-grid-item>
            
        </van-grid>

        </div>
        
    </div>
</template>

<script>
import pj from '../../assets/imgs/mine/login_toolbar_icon_pj.png'
import xy from '../../assets/imgs/mine/login_toolbar_icon_xy.png'
import xb from '../../assets/imgs/mine/login_toolbar_icon_xb.png'
import wd from '../../assets/imgs/mine/login_toolbar_icon_wd.png'
import kf from '../../assets/imgs/mine/login_toolbar_icon_kf.png'
import qz from '../../assets/imgs/mine/login_toolbar_icon_qz.png'
import yj from '../../assets/imgs/mine/login_toolbar_icon_yj.png'
import dhj from '../../assets/imgs/mine/login_toolbar_icon_dhj.png'
export default {
    data() {
        return {
            dataList:[
                {
                    title:'我的评价',
                    icon:pj,              
                },
                {
                    title:'芝麻信用',
                    icon:xy,              
                },
                {
                    title:'小白信用',
                    icon:xb,              
                },
                {
                    title:'我的故事',
                    icon:wd,              
                },
                {
                    title:'开具发票',
                    icon:kf,              
                },
                {
                    title:'求租',
                     icon:qz,              
                },
                {
                    title:'意见反馈',
                    icon:yj,              
                },
                {
                    title:'兑换券',
                    icon:dhj,              
                }
            ]
        }
    },
    methods: {
        getdata(){
            console.log(this.dataList)
        }
    },
    mounted() {
        this.getdata();
    },
}
</script>

<style lang="scss" scoped>

    .selfCredit{
        width: 100%;
        height: 200px;
        background-color: #F9F9F9;
        margin-top: 10px;
        
    .wrap{
        background-color: white;
        height: 182px;
        margin:  0 15px 0 15px;
        padding-top:18px ;
        
    }
        
        p{  
            width: 56px;
            height: 13.33px;
            font-size: 14px;
            font-weight: 500;
            margin-top: 13.67px;
            text-align: center;
        }
        img{
           
            width: 22px;
            height: 22px;
            
           
        }
    }
</style>