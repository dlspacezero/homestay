<template>
  <div class="nm-order">
    <header>订单填写</header>
    <!-- 入住时间 -->
    <div class="order-time">
      <!-- 房间名 -->
      <div class="order-time-housename">极简黑白海洋球滑梯吊椅loft网红一居｜整组｜1居｜宜住2人</div>
      <!-- 时间 -->
      <div class="time">
        <div class="time-top">
          <p>08月31日入住-09月01日离开</p>
          <span>
            住一晚
            <img src="@/assets/img/dd_icon_jr@2x.png" alt />
          </span>
        </div>
        <div class="time-bottom">
          <p>最早14:00入住 最晚12:00离开</p>
          <span>最少入住1天</span>
        </div>
      </div>
    </div>
    <!-- 入住信息 -->
    <div class="order-imformtion">
      <div class="order-imformtion-top">
        <p>住一晚</p>
        <p>1套</p>
      </div>
      <div class="order-imformtion-middle van-hairline--bottom">
        <div class="number">
          <p>入住人（1/2）</p>
          <a href="javascript:;">
            <img src="@/assets/img/dd_icon@2x.png" alt />
          </a>
        </div>
        <div class="order-name">
          <div class="name">
            刘晓雨
            <van-icon name="checked" />
          </div>
        </div>
      </div>
      <div class="order-imformtion-bottom">木鸟住宿意外险 添加入住人，限时免费送</div>
    </div>
    <!-- 入住价格 -->
    <div class="order-price">
      <!-- 上面部分 -->
      <div class="order-price-top">
        <div class="price">
          <p>房费</p>
          <span>¥489.00</span>
        </div>
        <div class="price-number">
          <p>共1晚1套</p>
          <a href="javascript:;">
            <img src="@/assets/img/dd_jr@2x.png" alt />
          </a>
        </div>
      </div>
      <!-- 中间部分 -->
      <div class="order-price-middle">
        <p>房东优惠</p>
        <!-- 有无优惠券 -->
        <div class="coupons">
          <p>无可用优惠券</p>
          <a href="javascript:;">
            <img src="@/assets/img/dd_yh@2x.png" alt />
          </a>
        </div>
      </div>
      <div class="order-price-bottom">
        <p>平台优惠</p>
        <!-- 有无优惠券 -->
        <div class="coupons">
          <p>无可用优惠券</p>
          <a href="javascript:;">
            <img src="@/assets/img/dd_yh@2x.png" alt />
          </a>
        </div>
      </div>
      <div class="order-price-foot">
        <p class="total">合计</p>
        <span>￥489</span>
      </div>
    </div>
    <div class="order-invoice">
      <div class="order-invoice-top">
        <p>发票</p>
        <span>如需要，离店后可到个人中心开具发票</span>
      </div>
      <div class="order-invoice-bottom">
        <p>额外收费</p>
        <!-- 有无优惠券 -->
        <div class="detail">
          <p>明细</p>
          <a href="javascript:;">
            <img src="@/assets/img/dd_yh@2x.png" alt />
          </a>
        </div>
      </div>
    </div>
    <p class="order-foot">退款原则 提前1天可全额退款</p>
    <p class="order-end">预定代表您同意《预定须知》、《保险须知》、《预定保障计划》</p>
    <footer>
      <p>¥489.00</p>
      <router-view></router-view>
      <a href="javascript:;" @click="gotopay"><img src="@/assets/img/dd-tj@2x.png" alt="" route></a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    gotopay(){
      console.log(1);
      this.$router.push('/pay')
    }
  },
};
</script>

<style lang="scss" scoped>
.nm-order {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f8fa;

  header {
    width: 100%;
    height: 48px;
    font-size: 14px;
    line-height: 48px;
    text-align: center;
    background: white;
    position: fixed;
    color: #262626;
  }

  // 入住时间
  .order-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 344px;
    height: 145px;
    background: white;
    margin-top: 59px;
    border-radius: 4px;

    // 房间信息
    .order-time-housename {
      width: 302px;
      height: 47px;
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      margin-top: 16px;
      border-bottom: 1px solid #c3c3c3;
      color: #494949;
    }

    // 时间
    .time {
      width: 302px;
      height: 49px;
      font-weight: 600;
      font-size: 15px;
      border-color: #c3c3c3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      border-bottom: 1px solid #c3c3c3;

      .time-top {
        width: 100%;
        height: 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          width: 200px;
          line-height: 17px;
          color: #494949;
        }

        span {
          text-align: right;
          width: 80px;
          line-height: 17px;
          color: #494949;

          img {
            width: 17px;
            height: 17px;
          }
        }
      }

      .time-bottom {
        width: 100%;
        height: 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #8d8d8d;
        font-size: 14px;

        p {
          width: 220px;
          line-height: 17px;
        }

        span {
          text-align: right;
          width: 100px;
          line-height: 17px;
        }
      }
    }
  }

  // 入住信息
  .order-imformtion {
    width: 346px;
    height: 207px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    margin-top: 12px;
    background: white;

    .order-imformtion-top {
      width: 313px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #c3c3c3;

      p {
        font-size: 15px;
        font-weight: 600;
        color: #494949;
      }
    }
    .order-imformtion-middle {
      width: 313px;
      height: 111px;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-color: #c3c3c3;
      border-bottom: 1px solid #c3c3c3;
      .number {
        width: 100%;
        height: 23px;
        display: flex;
        justify-content: space-between;
        margin-top: 21px;
        p {
          width: 100px;
          font-size: 15px;
          line-height: 23px;
          // text-align: center;
          font-weight: 600;
          color: #494949;
        }
        a {
          width: 56px;
          height: 23px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .order-name {
        width: 100%;
        margin-top: 31px;
        .name {
          width: 55px;
          height: 25px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid orange;
          line-height: 25px;
          text-align: center;
          border-radius: 5px;
          position: relative;
          color: #494949;
          .van-icon {
            font-size: 5px;
            color: orange;
            position: absolute;
            right: -2px;
            bottom: -3px;
          }
        }
      }
    }
    .order-imformtion-bottom {
      width: 313px;
      height: 46px;
      line-height: 46px;
      font-size: 14px;
      color: #808080;
      text-indent: 5px;
      font-weight: 600;
    }
  }
  .order-price {
    width: 345px;
    height: 206px;
    background: white;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    .order-price-top {
      width: 313px;
      height: 60px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #c3c3c3;
      .price {
        width: 100%;
        height: 16px;
        display: flex;
        font-size: 15px;
        font-weight: 600;
        margin-top: 17px;
        justify-content: space-between;

        p {
          width: 52px;
          height: 100%;
          text-align: center;
          line-height: 16px;
          color: #494949;
        }
        span {
          color: #494949;
        }
      }
      .price-number {
        width: 100%;
        height: 12px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
        p {
          width: 51px;
          font-size: 12px;
          color: #808080;
        }
        a {
          width: 12px;
          height: 12px;
          position: relative;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .order-price-middle {
      width: 313px;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c3c3c3;
      p {
        padding: 12px;
        font-size: 15px;
        color: #494949;
        font-weight: 600;
      }
      .coupons {
        display: flex;
        height: 15px;
        p {
          height: 15px;
          font-size: 15px;
          color: #adadad;
          padding: 0;
        }
        a {
          width: 15px;
          height: 15px;
          margin-left: 3px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
    .order-price-bottom {
      width: 313px;
      height: 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c3c3c3;
      p {
        padding: 12px;
        font-size: 15px;
        color: #494949;
        font-weight: 600;
      }
      .coupons {
        display: flex;
        height: 15px;
        p {
          height: 15px;
          font-size: 15px;
          color: #adadad;
          padding: 0;
        }
        a {
          width: 15px;
          height: 15px;
          margin-left: 3px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
    .order-price-foot {
      width: 313px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 53px;
      .total {
        height: 15px;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        padding: 0 10px;
        color: #aaaaaa;
      }
      span {
        color: #494949;
        margin-right: 6px;
        font-weight: 600;
      }
    }
  }
  .order-invoice {
    width: 346px;
    height: 77px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    margin-top: 12px;
    background: white;
    .order-invoice-top {
      width: 313px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #c3c3c3;
      p {
        padding: 0 24px;
        color: #494949;
        font-size: 15px;
        font-weight: 600;
      }
      span {
        font-size: 11px;
        color: #808080;
      }
    }
    .order-invoice-bottom {
      width: 313px;
      height: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        padding: 0 24px;
        font-size: 15px;
        color: #494949;
        font-weight: 600;
      }
      .detail {
        display: flex;
        height: 15px;
        p {
          height: 15px;
          font-size: 11px;
          color: #808080;
          padding: 0;
          font-weight: normal;
        }
        a {
          width: 15px;
          height: 15px;
          margin-left: 3px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
  .order-foot,.order-end{
    width: 346px;
    font-weight: 600;
    font-size: 12px;
    margin-top: 12px;
  }
  .order-end{
    line-height: 16px;
    margin-top: 29px;
    margin-bottom: 84px;
  }
  // 底部固定定位图片
  footer{
      height: 88px;
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      background: white;
      // display: none;
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: space-between;
        p{
          font-size: 23px;
          margin-left: 42px;
          color: #FF8A70;
        }
        a{
          width: 81px;
          height: 39px;
          margin-right: 14px;
            img{
              width: 100%;
              height: 100%;
          
            }
        }
  }
}
</style>
