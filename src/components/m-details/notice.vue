<template>
  <div class="notice-container">
    <!-- ----- -->
    <div class="top-p">
      <span class="left">入住须知</span>
      <span class="right"></span>
    </div>
    <!-- ------ -->
    <div class="wrapDiv ps first">
      <p class="left">入离时间</p>
      <p class="right">14:00后入住,12:00前退房</p>
    </div>
    <!-- ------ -->
    <div class="wrapDiv ps">
      <p class="left">身份证</p>
      <p class="right">需要</p>
    </div>
    <!-- ---- -->
    <div class="wrapDiv ps">
      <p class="left">接待要求</p>
      <p class="right" style="color: #EC7C67;">本规则由房东制定</p>
    </div>
    <!-- --- -->
    <div class="wrapDiv">
      <div class="left"></div>
      <div class="right litips">
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>接待儿童</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>接待婴幼儿</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>适合老人</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>接待外宾</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>适合携带宠物</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>允许抽烟</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>允许做饭</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>允许聚会</span>
        </div>
        <div class="li">
          <img :src="sc_icon10" alt="pic" v-show="tips===0" />
          <img :src="sc_icon11" alt="pic" v-show="tips===1" />
          <span>允许商拍</span>
        </div>
      </div>
    </div>
    <!-- ---- -->
    <img :src="sc_line" alt="pic" class="splitLine" />
    <!-- ------ -->
    <p class="msg">
      <span style="font-weight: bold;color: #333333;">房源信息</span>
      &emsp;
      1.入住带好身份证/300元押金办理入
      住，因为北京监管比较严格请理解1(押金是为了…
    </p>
    <div class="littlespan">详情</div>
  </div>
</template>

<script>
import sc_line from "@/assets/imgs/maindetailsicon/sc_line.png";
import sc_icon10 from "@/assets/imgs/maindetailsicon/sc_icon10.png";
import sc_icon11 from "@/assets/imgs/maindetailsicon/sc_icon11.png";
export default {
  data() {
    return {
      sc_line: sc_line,
      sc_icon10: sc_icon10,
      sc_icon11: sc_icon11,
      tips: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.notice-container {
  height: 375px;
  background: #ffffff;
  box-shadow: 0px 1px 6px 0px rgba(84, 84, 85, 0.1);
  margin-top: 13px;
  box-sizing: border-box;
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
  .wrapDiv {
    display: flex;
    .left {
      width: 70px;
      font-weight: bold;
      color: #333333;
    }
    .right {
      font-weight: 500;
      color: #333333;
    }
  }
  .ps {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  .first {
    margin-top: 13px;
  }
  .litips {
    width: 234px;
    .li {
      float: left;
      width: 117px;
      height: 22px;
      margin-bottom: 3px;
      img {
        width: 22px;
        height: 22px;
        display: inline-block;
        margin-right: 3px;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        font-weight: 500;
        color: #333333;
        vertical-align: middle;
      }
    }
  }
  // ----------------
  .msg {
    width: 100%;
    height: 50px;
    font-size: 13px;
    font-weight: 500;
    color: #333333;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .littlespan {
    line-height: 22px;
    height: 22px;
    font-size: 12px;
    font-weight: bold;
    color: #ff9966;
  }
  // ----------------------
  .splitLine {
    width: 100%;
    height: 10px;
  }
}
</style>