<template>
    <div class="order">
        <div class="wrap">
            <van-nav-bar
                @click-right="onClickRight"
                
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
        onClickRight(){
            console.log(2);
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