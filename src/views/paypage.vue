<template>
    <div>
        <van-nav-bar
            title="支付成功"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="paynotice">
            <img :src=pay alt="">
            <p>支付成功</p>
            <div class="price">￥12.00</div>
        </div>
        <div class="button">
            <van-button type="primary" size="large" round  color="#2ae006" block @click="toDone">完成</van-button>
            <van-button type="primary" size="large" round  color="#2ae006" plain to="/index">返回首页</van-button>
        </div>
        

    </div>
</template>
<script>
import pay from '../assets/imgs/zhifuchenggong.png'
export default {
    data() {
        return {
            pay:pay
        }
    },
    methods: {
        onClickLeft(){
            this.$router.replace("/index");
        },
        toDone(){
            this.$router.go(-2);
        }
    },
}
</script>
<style lang="scss" scoped>
    .van-nav-bar{
        
    .van-icon:before{
            content:''; 
            color:#333333;
        }
    .van-nav-bar__title{
        font-size: 15px;
    }
    }
    
    .paynotice{
        position: absolute;
        top: 162px;
        left: 133px;
        display: flex;
        flex-direction: column;
        align-items: center;
      img{
          width: 110px;
          height: 110px;
      }
      p{
          width: 80px;
          height: 19px;
          color: #4C4C4C;
          font-size: 19px;
          margin-top: 47px;
          font-family: Adobe Heiti Std R;
      }
      .price{
          font-size: 30px;
          margin-top: 24px;
      }  
    }
    .button{
        position: absolute;
        top: 433px;
        left: 29px;
    }
    .van-button{
        width: 320px;
        height: 46px;
        margin-top: 25px;
        .van-button__text{
            font-size: 18px;
            font-family: PingFangSC-Regular;
        }
    }
</style>