<template>
  <div class="discover-special-wrap">
    <!-- 头部 -->
    <div class="discover-detail-photo">
      <div class="discover-special-photo-header" :style="{display:disappear,background:bgColor}">
        <span class="iconfont icon-arrow-right" @click="toBack"></span>
      </div>
      <div class="discover-special-photo-type">
        <div class="all">
          <h1>情 侣 房</h1>
          <van-cell is-link @click="showPopup">
            <span class="iconfont icon-svg18">全部</span>
          </van-cell>
          <van-popup
            v-model="show"
            position="bottom"
            :overlay="false"
            closeable
            close-icon-position="top-left"
          >
            <van-index-bar :index-list="indexList">
              <van-index-anchor index="B" />
              <van-cell title="北海" />
              <van-cell title="北京" />

              <van-index-anchor index="C" />
              <van-cell title="长春" />
              <van-cell title="常德" />
              <van-cell title="长沙" />
              <van-cell title="常州" />
              <van-cell title="成都" />
              <van-cell title="重庆" />

              <van-index-anchor index="D" />
              <van-cell title="大理" />
              <van-cell title="大连" />

              <van-index-anchor index="F" />
              <van-cell title="佛山" />
              <van-cell title="福州" />

              <van-index-anchor index="G" />
              <van-cell title="广州" />

              <van-index-anchor index="H" />
              <van-cell title="哈尔滨" />
              <van-cell title="海口" />
              <van-cell title="杭州" />
              <van-cell title="合肥" />
              <van-cell title="衡阳" />
              <van-cell title="惠州" />
              <van-cell title="湖州" />

              <van-index-anchor index="J" />
              <van-cell title="嘉兴" />

              <van-index-anchor index="K" />
              <van-cell title="昆明" />

              <van-index-anchor index="L" />
              <van-cell title="丽水" />
              <van-cell title="陵水" />

              <van-index-anchor index="L" />
              <van-cell title="北海" />
              <van-cell title="北京" />

              <van-index-anchor index="N" />
              <van-cell title="南昌" />
              <van-cell title="南京" />

              <van-index-anchor index="Q" />
              <van-cell title="青岛" />
              <van-cell title="清远" />
              <van-cell title="秦皇岛" />

              <van-index-anchor index="R" />
              <van-cell title="日照" />

              <van-index-anchor index="S" />
              <van-cell title="三亚" />
              <van-cell title="上海" />
              <van-cell title="沈阳" />
              <van-cell title="深圳" />
              <van-cell title="苏州" />

              <van-index-anchor index="T" />
              <van-cell title="天津" />

              <van-index-anchor index="W" />
              <van-cell title="威海" />
              <van-cell title="温州" />
              <van-cell title="武汉" />
              <van-cell title="无锡" />

              <van-index-anchor index="X" />
              <van-cell title="厦门" />
              <van-cell title="西安" />

              <van-index-anchor index="Y" />
              <van-cell title="扬州" />
              <van-cell title="营口" />

              <van-index-anchor index="Z" />
              <van-cell title="舟山" />
              <van-cell title="珠海" />
            </van-index-bar>
          </van-popup>
        </div>
        <div class="nums">
          16
          <span>套</span>
        </div>
      </div>
      <p class="discover-special-photo-info">蜜月、情侣不一样的浪漫</p>
    </div>
    <!-- 内容 -->
    <ul>
      <li v-for="(item,index) in 3" :key="index">
        <!-- 房型 轮播图 -->
        <img class="banner" src="../../assets/images/hs-photo-01.jpg" alt />
        <div class="infoWrap">
          <!-- 房东 头像 -->
          <img src="../../assets/images/touxiang.jpg" alt="photo" class="headshot" />
          <!-- 房型 评价 -->
          <div class="praise">
            <span class="iconfont icon-dianzan"></span>
            <span>5.0</span>
            <span style="color:#FD8735">"超赞"</span>
            <span>2条评价</span>
          </div>
          <!-- 房型 标题 -->
          <div class="title">
            <span class="cyber">网红民宿</span>
            <span class="h2">卓小花【浪漫满屋】步行人民公园/天府广场春熙路/骑行文殊院</span>
          </div>
          <!-- 房型 信息 -->
          <div class="info">
            <span>整租-2居室-宜住6人</span>
            <span class="address">成都锦江区</span>
          </div>
          <!-- 房型 亮点 -->
          <div class="ableDo">
            <span>可做饭</span>
          </div>
          <!-- 房型 价格 -->
          <div class="price">
            <span class="unit">¥</span>
            <span class="num">338</span>
            <span class="evn">/晚</span>
          </div>
        </div>
        <!-- 房型 收藏 -->
        <div class="likes">
          <img :src="unlikeimg" alt="pic" class="like" v-if="like==0" @click="likes" />
          <img :src="likeimg" alt="pic" class="like" v-if="like==1" @click="likes" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import likeimg from "@/assets/imgs/icon_sc.png";
import unlikeimg from "@/assets/imgs/icon_sc2.png";
import { Toast } from "vant";
export default {
  data() {
    return {
      disappear: "flex",
      bgColor: "transparent",
      show: false,
      like: 0,
      unlikeimg: unlikeimg,
      likeimg: likeimg,
      indexList: [
        "B",
        "C",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "N",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  methods: {
    // 获取dom滚动条滑动数据，并改变照片头部的 返回、分享的颜色
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll > 1) {
        this.activeColor = "#FF9180";
        this.bgColor = "white";
      } else {
        this.activeColor = "white";
        this.bgColor = "transparent";
      }
    },
    // 头部照片返回上一级路由
    toBack() {
      this.$router.go(-1);
    },
    // 全部地址弹出层1
    showPopup() {
      this.show = true;
    },
    // 收藏、取消收藏：
    likes() {
      if (this.like == 0) {
        Toast({
          message: "收藏成功！",
          position: "bottom",
        });
        this.like++;
      } else if (this.like == 1) {
        Toast({
          message: "取消收藏成功！",
          position: "bottom",
        });
        this.like--;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
};
</script>

<style lang="scss">

.discover-special-wrap {
  .discover-detail-photo {
    height: 220px;
    padding: 0 15px;
    background-image: url("../../assets/images/hs-photo-01.jpg");
    overflow: hidden;
    .discover-special-photo-header {
      width: 100%;
      height: 50px;
      background: transparent;
      z-index: 2;
      position: fixed;
      top: 0;
      left: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
    .discover-special-photo-type {
      display: flex;
      justify-content: space-between;
      height: 70px;
      padding: 85px 0 25px;
      border-bottom: 1px solid white;
      color: white;
      .all {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        .van-popup--bottom {
          .van-popup__close-icon {
            height: 50px;
          }
          .van-popup__close-icon--top-left {
            position: fixed;
            top: 0;
            left: 0;
            background: white;
            border-bottom: 2px solid #FF8F83;
          }
          .van-icon-cross::before {
            padding: 15px 350px 0 15px;
          }
          .van-index-anchor--sticky {
            top: 49px;
          }
          .van-index-bar{
            margin-top: 52px;
          }
          .van-index-anchor{
            background: #e1e1e1;
          }
          .van-index-bar__index ,.van-index-bar__index--active{
            color: #FF8F83;
          }
        }
      }
      .nums {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: orange;
        font-size: 16px;
        line-height: 50px;
        text-align: center;
        span {
          font-size: 14px;
        }
      }
      .van-cell {
        border-radius: 30px;
        width: 70px;
        height: 30px;
        padding: 0 0 0 6px;
        line-height: 30px;
        .van-cell__right-icon {
          display: none;
        }
      }
    }
    .discover-special-photo-info {
      color: white;
      font-size: 15px;
      margin-top: 15px;
    }
  }
  ul {
    background: #f0f0f0;
    li {
      height: 360px;
      background: #ffffff;
      border-radius: 5px;
      margin: 0 15px;
      padding: 8px 8px 0;
      margin-bottom: 16px;
      position: relative;
      .banner {
        display: block;
        width: 100%;
        border-radius: 10px;
      }
      .infoWrap {
        margin: 0 8px;
        position: relative;
        .headshot {
          width: 47px;
          height: 47px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          position: absolute;
          top: -15px;
          right: 0px;
        }
        .praise {
          margin: -13px 0 10px 0;
          width: 130px;
          height: 30px;
          background: #ffffff;
          box-shadow: 0px 2px 8px 0px rgba(104, 102, 102, 0.13);
          border-radius: 15px;
          line-height: 30px;
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #999999;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          .icon-dianzan {
            color: #fd8735;
          }
        }
        .title {
          height: 31px;
          display: flex;
          align-items: center;
          .cyber {
            width: 49px;
            height: 16px;
            line-height: 16px;
            background: linear-gradient(89deg, #a33def 0%, #1383fd 100%);
            border-radius: 2px;
            text-align: center;
            font-size: 11px;
            font-family: "PingFang SC";
            font-weight: bold;
            color: #f7f7f7;
          }
          .h2 {
            width: 210px;
            height: 31px;
            margin-left: 13px;
            line-height: 31px;
            font-size: 15px;
            font-family: "PingFang SC";
            font-weight: bold;
            color: #333333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .info {
          height: 24px;
          line-height: 24px;
          font-size: 11px;
          font-family: "PingFang SC";
          font-weight: 500;
          color: #656565;
          span {
            margin-right: 11px;
          }
        }
        .ableDo {
          height: 17px;
          padding-bottom: 10px;
          display: flex;
          border-bottom: 1px solid #e1e1e1;
          span {
            height: 17px;
            margin-right: 4px;
            border: 1px solid #e1e1e1;
            border-radius: 2px;
            line-height: 17px;
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #656565;
          }
        }
        .price {
          height: 48px;
          line-height: 48px;
          font-family: PingFang SC;
          span.unit {
            font-size: 14px;
            font-weight: bold;
            color: #333333;
          }
          span.num {
            font-size: 20px;
            font-weight: bold;
            color: #333333;
          }
          span.evn {
            font-size: 14px;
            font-weight: 500;
            color: #333333;
          }
        }
      }
      .likes {
        position: absolute;
        top: 24px;
        right: 26px;
        width: 19px;
        height: 17px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>