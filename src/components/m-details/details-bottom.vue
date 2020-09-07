<template>
  <div class="details-bottom">
    <img :src="sc_mnms" alt="pic" />
    <h5>
      <span>住</span>
      <span>木</span>
      <span>鸟</span>
      <span>有</span>
      <span>保</span>
      <span>障</span>
    </h5>
    <p>木鸟1000万元住宿保障计划</p>
  </div>
</template>

<script>
import sc_mnms from "@/assets/imgs/maindetailsicon/sc_mnms.png";
export default {
  data() {
    return {
      sc_mnms: sc_mnms,
    };
  },
};
</script>

<style lang="scss" scoped>
.details-bottom {
  height: 120px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 71px;
    height: 20px;
  }
  h5 {
    width: 165px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    font-weight: bold;
    color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 14px;
      height: 1px;
      background: #333333;
    }
    &::before {
      margin-right: 7px;
    }
    &::after {
      margin-left: 7px;
    }
  }
  p {
    height: 12px;
    line-height: 12px;
    font-size: 11px;
    font-weight: 500;
    color: #999999;
  }
}
</style>