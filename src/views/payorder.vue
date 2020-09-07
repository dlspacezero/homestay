<template>
  <div class="payorder">
    <!-- 头部 -->
    <header>
      <a href="javascript:;" @click="returnpage">
        <img src="@/assets/img/icon@2x.png" alt />
      </a>
      <p>支付订单</p>
    </header>
    <!-- 支付金额 -->
    <div class="payorder-price">
      <h3>￥489</h3>
      <p>订单号：20200831165429672226</p>
    </div>
    <!-- 支付列表 -->
    <!-- <div class="paylist">
          <div class="paylist-way" v-for="value in 8" :key="value">
            <div class="img"><img src="@/assets/img/zhifu_icon@2x.png" alt=""></div>
            <p>支付宝支付</p>
            <input type="checkbox">

          </div>
    </div>-->
    <van-radio-group v-model="radio">
      <van-cell-group>
        <div class="list" v-for="(value,index) in paylist" :key="index"> 
          <div class="img">
            <img :src="value.url" alt />
          </div>
            <p v-if="index===2">先体验入住，后支付房款</p>
          <van-cell :title="value.title" clickable @click="radio = index" icon-size="15px" >
            <template #right-icon>
              <van-radio checked-color="#07c160" :name="index" />
            </template>
          </van-cell>
        </div>
      </van-cell-group>
    </van-radio-group>
    <!-- 确认支付 -->
    <a href="javascript:;" class="pay">
      <img src="@/assets/img/qrzf@2x.png" alt />
    </a>
  </div>
</template>

<script>
import img1 from '../assets/img/zhifu_icon.png'
import img2 from '@/assets/img/icon_wx.png'
import img3 from '@/assets/img/icon_xzhf.png'
import img4 from '@/assets/img/icon_ysf.png'
import img5 from '@/assets/img/icon_jdzhifu.png'
import img6 from '@/assets/img/icon_hb.png'
import img7 from '@/assets/img/yzf_icon.png'
export default {
  data() {
    return {
      radio: "1",
      paylist: [
      {
        title: '支付宝支付',
        url:img1
      },
       {
        title: '微信支付',
        url:img2
      },
       {
        title: '先住后付',
        url:img3
      },
       {
        title: '云闪付',
        url:img4
      },
       {
        title: '京东支付',
        url:img5
      },
       {
        title: '花呗分期',
        url:img6
      },
       {
        title: '翼支付',
        url:img7
      },
    ]
    };
    
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   返回上一页
    returnpage() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang='scss' scoped>
.payorder {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f6f6;
  // 头部
  header {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    background: white;
    text-align: center;
    line-height: 44px;
    font-size: 15px;
    color: #343434;
    border-bottom: 1px solid #c3c3c3;
    // font-weight: 600;
    p {
      margin-left: 132px;
      font-size: 15px;
    }
    a {
      width: 15px;
      height: 15px;
      position: relative;
      margin-left: 13px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .payorder-price {
    width: 100%;
    height: 97px;
    background: white;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 37px;
      height: 58px;
      line-height: 58px;
    }
    p {
      font-size: 12px;
      color: #959595;
    }
  }
  // 支付列表

    .van-radio-group {
      width: 100%;
      height: 558px;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      .list {
         width: 324px;
          height: 51px;
        position: relative;
        display: flex;
        // .img {
        //   width: 15px;
        //   height: 15px;
        //   border-radius: 50%;
        //   overflow: hidden;
        //   position: absolute;
        //   top: 18px;
        //   left: 0;
        //   z-index: 100;
        //   img {
        //     width: 100%;
        //     height: 100%;
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //   }
        // }
        .img{
          width: 46px;
          height: 51px;
          display: flex;
          align-items: center;
            img:first-child{
            border-radius: 50%;
          }
        }
        
        p{
          font-size: 14px;
          color: #FE8C61;
          position: absolute;
          left: 46px;
          bottom: 1px;
          z-index: 100;
        }
        .van-cell {
          width: 278px;
          height: 51px;
          background: white;
          display: flex;
          padding: 0;
          align-items: center;
          color: #5f5f5f;
          font-size: 14px;
        
        }
      }
    }
  

  // /确认支付
  .pay {
    width: 358px;
    height: 47px;
    position: fixed;
    bottom: 0;
    z-index: 999;
    left: 7px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
