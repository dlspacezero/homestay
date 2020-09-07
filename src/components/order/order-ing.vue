<template>
  <!-- 进行中 订单详细信息 -->
  <div class="hs-order-wrap">
    <!-- 订单头部 -->
    <div class="hs-order-header">
      <div class="hs-order-headshot">
        <img src="../../assets/images/touxiang.jpg" alt />
        <span>candy帆</span>
      </div>
      <p>等待付款</p>
    </div>
    <!-- 订单照片及介绍 -->
    <div class="hs-order-info">
      <img src="../../assets/images/hs-photo-01.jpg" alt />
      <div>
        <p class="discrible">乐House阳台景观大床房/标准间</p>
        <p class="price">金额：¥218元</p>
      </div>
    </div>
    <!-- 订单日期1 -->
    <div class="hs-order-date">
      <div class="date">
        <p>2020-09-12</p>
        <p>2020-09-13</p>
      </div>
      <p class="time">1间&nbsp;&nbsp;1晚</p>
      <div class="week">
        <p>星期日 10:00</p>
        <p>星期一 14:00</p>
      </div>
    </div>
    <!-- 订单底部 -->
    <div class="hs-order-footer">
      <div class="two">付款</div>
      <div class="one">联系房东</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// 订单详细信息
.hs-order-wrap {
  width: 375px;
  height: 353px;
  background: white;
  color: #333333;
  margin-top: 13px;
  .hs-order-header {
    padding: 0 15px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;
    font-size: 14px;
    font-family: PingFang-SC-Medium;
    font-weight: SC-Medium;
    .hs-order-headshot {
      display: flex;
      align-items: center;
      img {
        width: 22px;
        height: 22px;
        border-radius: 10px;
      }
      span {
        margin-left: 10px;
      }
    }
  }
  .hs-order-info {
    height: 77px;
    background: #f3f3f3;
    padding: 13px 15px 12px;
    display: flex;
    justify-content: space-between;
    img {
      width: 100px;
      height: 76px;
    }
    .discrible {
      font-family: PingFang-SC-Bold;
      font-weight: 700;
      font-size: 15px;
      float: right;
    }
    .price {
      font-family: PingFang-SC-Medium;
      font-weight: SC-Medium;
      font-size: 14px;
      float: right;
      margin-top: 30px;
    }
  }
  .hs-order-date {
    height: 72px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 18px 15px 40px;
    .date {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: SC-Bold;
      font-family: PingFang-SC-Bold;
    }
    .time {
      width: 44px;
      font-size: 12px;
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 12px;
        background: #e7e7e7;
        position: absolute;
        top: -10px;
        left: 21px;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 12px;
        background: #e7e7e7;
        position: absolute;
        bottom: -10px;
        left: 21px;
      }
    }
    .week {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
  }
  .hs-order-footer {
    height: 63px;
    margin: 0 16px 0 17px;
    border-top: 1px solid #e7e7e7;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    .one {
      float: right;
      margin-top: 15px;
      margin-right: 10px;
      height: 30px;
      width: 74px;
      border: 1px solid #999999;
      border-radius: 15px;
    }
    .two {
      float: right;
      margin-top: 15px;
      height: 30px;
      width: 61px;
      border: 1px solid #eb7b69;
      border-radius: 15px;
      color: #eb7b69;
    }
  }
}
</style>