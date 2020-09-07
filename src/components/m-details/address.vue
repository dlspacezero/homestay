<template>
  <div class="address-container">
    <div class="top-p">
      <span class="left">位置周边</span>
      <span class="right"></span>
    </div>
    <div class="subtop-p">
      <span class="left">北京，朝阳区</span>
      <span class="right">复制地址</span>
    </div>
    <div class="addr">百子湾东里406号沿海赛洛城</div>
    <div class="img">
      <img src="#" alt="pic" />
    </div>
    <div class="station">
      <div class="list">
        <img :src="sc_icon4" alt="pic" />
        <div class="pwrap">
          <p class="blod">飞机场2个</p>
          <p class="normal">最近距离29.2公里</p>
          <p class="light">驾车约36分钟</p>
        </div>
      </div>
      <div class="list">
        <img :src="sc_icon5" alt="pic" />
        <div class="pwrap">
          <p class="blod">火车站5个</p>
          <p class="normal">最近距离8.3公里</p>
          <p class="light">驾车约20分钟</p>
        </div>
      </div>
      <div class="list">
        <img :src="sc_icon5_1" alt="pic" />
        <div class="pwrap">
          <p class="blod">地铁站3个</p>
          <p class="normal">最近距离920米</p>
          <p class="light">驾车约4分钟</p>
        </div>
      </div>
    </div>
    <div class="littlespan">详情</div>
  </div>
</template>
<script>
import sc_icon4 from "@/assets/imgs/maindetailsicon/sc_icon4.png";
import sc_icon5 from "@/assets/imgs/maindetailsicon/sc_icon5.png";
import sc_icon5_1 from "@/assets/imgs/maindetailsicon/sc_icon5_1.png";
export default {
  data() {
    return {
      sc_icon4: sc_icon4,
      sc_icon5: sc_icon5,
      sc_icon5_1: sc_icon5_1,
    };
  },
};
</script>

<style lang="scss" scoped>
.address-container {
  box-sizing: border-box;
  height: 382px;
  background: #ffffff;
  box-shadow: 0px 1px 6px 0px rgba(84, 84, 85, 0.1);
  padding: 15px;
  .top-p {
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .left {
      font-size: 15px;
      color: #333333;
    }
    .right {
      font-size: 12px;
      color: #999999;
    }
  }
  .subtop-p {
    width: 100%;
    margin-top: 8px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    .left {
      color: #333333;
    }
    .right {
      color: #ff9999;
    }
  }
  .addr {
    height: 14px;
    line-height: 14px;
    font-size: 11px;
    font-weight: bold;
    color: #999999;
  }
  .img {
    width: 311px;
    height: 104px;
    margin: 10px auto;
    background: #f1f1f1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .station {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list {
      width: 130px;
      height: 66px;
      display: flex;
      img {
        width: 22px;
        height: 22px;
      }
      .pwrap {
        width: 100px;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        margin-left: 3px;
        .blod {
          line-height: 24px;
          height: 24px;
          font-size: 14px;
          color: #333333;
        }
        .normal {
          line-height: 22px;
          height: 22px;
          font-size: 12px;
          color: #999999;
        }
        .light {
          height: 14px;
          line-height: 14px;
          font-size: 12px;
          color: #cccccc;
        }
      }
    }
  }
  .littlespan {
    line-height: 22px;
    height: 22px;
    font-size: 12px;
    font-weight: bold;
    color: #ff9966;
    margin-top: 10px;
  }
}
</style>