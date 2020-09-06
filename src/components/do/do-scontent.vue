<template>
  <!-- 特色房源详情页-内容 -->
  <ul class="scontent-wrap">
    <li v-for="(item,index) in 3" :key="index" @click="toDetail(1)">
      <!-- 房型 轮播图 -->
      <van-swipe :show-indicators="false">
        <van-swipe-item v-for="(item,index) in 4" :key="index" class="banner">
          <div class="banner">
            <img src="../../assets/images/hs-photo-01.jpg" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
      <!-- 房型 详细信息 -->
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
        <img :src="unlikeimg" alt="pic" class="like" v-if="like==0" @click.stop="likes" />
        <img :src="likeimg" alt="pic" class="like" v-if="like==1" @click.stop="likes" />
      </div>
    </li>
  </ul>
</template>

<script>
import likeimg from "@/assets/imgs/icon_sc.png";
import unlikeimg from "@/assets/imgs/icon_sc2.png";
import { Toast } from "vant";
export default {
  data() {
    return {
      like: 0,
      unlikeimg: unlikeimg,
      likeimg: likeimg,
    };
  },
  methods: {
    // 头部照片返回上一级路由
    toBack() {
      this.$router.go(-1);
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
    // 点击列表页进 主详情页的house
    toDetail(id) {
      this.$router.push("/detail/house/" + id);
    },
  },
};
</script>

<style lang="scss">
.scontent-wrap {
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
      width: 330px;
      height: 212px;
      border-radius: 10px;
      img {
        width: 100%;
      }
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
</style>