<template>
  <!-- 特色房源详情页 -->
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
    <!-- 特色房源详情页-内容 -->
    <scontent />
  </div>
</template>

<script>
import scontent from "./do-scontent";
export default {
  data() {
    return {
      disappear: "flex",
      bgColor: "transparent",
      show: false,
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
  components: {
    scontent,
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
  },
  // 监听滚动条事件
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
            border-bottom: 2px solid #ff8f83;
          }
          .van-icon-cross::before {
            padding: 15px 350px 0 15px;
          }
          .van-index-anchor--sticky {
            top: 49px;
          }
          .van-index-bar {
            margin-top: 52px;
          }
          .van-index-anchor {
            background: #e1e1e1;
          }
          .van-index-bar__index,
          .van-index-bar__index--active {
            color: #ff8f83;
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
}
</style>