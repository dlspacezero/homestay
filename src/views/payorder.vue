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
      <div class="paylist">
          <div class="paylist-way" v-for="value in 8" :key="value">
            <div class="img"><img src="@/assets/img/zhifu_icon@2x.png" alt=""></div>
            <p>支付宝支付</p>
            <input type="checkbox">

          </div>
      </div>
     
    <!-- 确认支付 -->
    <a href="javascript:;" class="pay" @click="toPaydone">
      <img src="@/assets/img/qrzf@2x.png" alt />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
         radio: '1',
    };
    paylist:[
        {
            title:'支付宝支付'
        }
    ]
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   返回上一页
    returnpage() {
      this.$router.go(-1);
    },
    toPaydone(){
      this.$router.replace('/paypage');
    }
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
  .paylist {
    width: 100%;
    height: 558px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
        .paylist-way{
            width: 344px;
            height: 15px;
            display: flex;
            align-items: center;
            margin: 19px 0 16px 0; 
                .img{
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    overflow: hidden;
                    position: relative;
                    
                        img{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            }

                }
                p{  width: 80px;
                    font-size: 14px;
                    margin-left:36px ;
                    color: #5F5F5F;
                }
                input{
                    margin-left: 194px;
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
