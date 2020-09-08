<template>
    <div class="midRedpart">
        <div class="wrap">
            <van-nav-bar
                @click-right="onClickRight">
                <template #left>
                    <img :src="redpakage" alt="">
                    <span>您有150元礼包待领取  立即领取</span>
                </template>
                
                <template #right>
                    <van-icon name="arrow" size="15" />
                </template>
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
import redpakage from '../../assets/imgs/mine/login_neirong.png'
export default {
    data() {
        return {
            redpakage:redpakage,
        }
    },
    methods: {
        onClickRight(){
            console.log(1);
            this.$router.push("/paypage");
        }
    },
}
</script>

<style lang="scss" scoped>
   .midRedpart{
       width: 100%;
       height: 45px;
       background-color: #F9F9F9;
       margin-top: 16px;
       .wrap{
           margin:  0 15px 0 15px;
           background-color: white;
           height: 45px;
       }
       img{
           width: 22px;
           height: 22px;
           margin-right: 9px;
       }
       span{
           color: #FC413E;
           font-size: 15px;
       }
       .van-icon-arrow{
           color: #FC413E;
           margin-right: 8px;
       }
   }
</style>