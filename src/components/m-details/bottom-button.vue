<template>
  <div class="bottom-button-container">
    <div class="left">
      <p class="top">
        <span class="pric">￥</span>
        <span>{{totalPrice}}</span>
      </p>
      <div class="bottom">共1晚</div>
    </div>
    <div class="right">
      <div class="icon">
        <img :src="sc_icon12" alt="pic" />
        <span>聊天</span>
      </div>
      <button @click="toOrderFillIn(id,date.into,date.out)">立即预定</button>
    </div>
  </div>
</template>

<script>
import sc_icon12 from "@/assets/imgs/maindetailsicon/sc_icon12.png";
export default {
  data() {
    return {
      sc_icon12: sc_icon12,
      id: "1",
      date: {
        into: "2020-09-15",
        out: "2020-09-18",
      },
      totalPrice: 0,
    };
  },
  methods: {
    toOrderFillIn(id, date1, date2) {
      //   this.$router.push("/main-details/" + id + date1 + date2);
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-button-container {
  height: 38px;
  background: #ffffff;
  box-shadow: -1px -2px 6px 0px rgba(84, 84, 85, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 16px 11px 42px;
  .left {
    .top {
      height: 12px;
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      .pric {
        font-size: 10px;
        font-weight: 500;
      }
    }
    .bottom {
      height: 22px;
      line-height: 22px;
      font-size: 10px;
      font-weight: bold;
      color: #656565;
      text-indent: 4px;
    }
  }
  .right {
    width: 160px;
    height: 38px;
    border-left: 1px solid #e7e7e7;
    display: flex;
    .icon {
      width: 22px;
      height: 38px;
      margin: 0 18px 0 28px;
      img {
        display: block;
        width: 22px;
        height: 22px;
      }
      span {
        display: block;
        height: 18px;
        line-height: 18px;
        font-size: 9px;
        font-weight: bold;
        color: #ef9583;
      }
    }
    button {
      width: 90px;
      height: 41px;
      background: linear-gradient(90deg, #eb6d49 0%, #efa54b 100%);
      border: 0px;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>