<template>
  <div class="discover-special-wrap">
    <!-- 头部 -->
    <div class="discover-detail-photo">
      <div class="discover-special-photo-header">
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
          >内容</van-popup>
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
        <img src="../../assets/images/hs-photo-01.jpg" alt />
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
        <div class="likes"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    // 头部照片返回上一级路由
    toBack() {
      this.$router.go(-1);
    },
    // 全部地址弹出层1
    showPopup() {
      this.show = true;
    },
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
      left: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
          height: 100%;
          background: white;
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
      img {
        display: block;
        width: 100%;
        height: 207px;
        background: #c8c4c4;
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
        background: #fd8270;
        border: 1px solid #ffffff;
      }
    }
  }
}
</style>