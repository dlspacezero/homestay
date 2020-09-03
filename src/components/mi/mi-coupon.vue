<template>
    <div class="coupon">
        <div class="wrap">
            <van-grid  :column-num="4"  :border="false" :gutter="8">
                <van-grid-item v-for="(item,index) in dataList" :key="index"  :to="item.to">
                    <span :class="item.icon" class="iconfont"></span>
                    <p>{{item.title}}</p>
                </van-grid-item>
            </van-grid>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList:[
                {
                    title:'优惠券',
                    icon:'icon-youhuiquan', 
                    to:'/coupond'             
                },
                {
                    title:'邀请好友',
                    icon:'icon-zmxy',
                    to:'/redpakage'
                },
                {
                    title:'积分',
                    icon:'icon-order_icon',              
                },
                {
                    title:'金卡会员',
                    icon:'icon-shuben',              
                },               
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .coupon{
        width:100% ;
        height: 100px;
        background-color: #F9F9F9;
        margin-top: 15px;
        .wrap{
        background-color: white;
        height: 100px;
        margin:  0 15px 0 15px;
        position: relative;
    }
        .van-grid{
            position: absolute;
            top: 20px;
            
        }
    }
        p{  
            width: 60px;
            height: 14px;
            font-size: 15px;
            font-weight: 500;
            color: #333333;
            margin-top: 10px;
            text-align: center;
        }
        span{
            display: inline-block;
            width: 20px;
            height: 15px;
            font-size: 21px;
           
        }
</style>