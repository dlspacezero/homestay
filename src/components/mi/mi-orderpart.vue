<template>
    <div class="order">
        <div class="wrap">
            <van-nav-bar
                @click-right="onClickRight"
                :border='false'
                
                >
                <template #left>
                    <span>我的订单</span>
                </template>
                <template #right>
                    <span>查看订单</span>
                    <van-icon name="arrow" size="18" />
                </template>
                
            </van-nav-bar>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        //点击查看订单
        onClickRight(){
            //跳转到订单页面
            this.$router.push('/order');
        }
    },
}
</script>
<style lang="scss" scoped>
    .order{
        width: 100%;
        height: 65px;
        background-color:#F9F9F9;
        margin-top: 19px;
        .wrap{
           margin:  0 15px 0 15px;
           background-color:#ffffff;
           height: 47px;
           padding: 9px 0 9px 0;
        //    .van-hairline--bottom{
        //        border: 1px solid white;
        //    }
           
           .van-nav-bar__left{
               span{
                   font-size: 18px;
                   color: #333333;
                   font-weight: 700;
               }
           }
           .van-nav-bar__right{
               span{
                   font-size: 14px;
                   color: #666666;
               }
           }
       }
    }
</style>