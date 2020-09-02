<template>
  <!-- 详情页外围 -->
  <div class="discover-detail-wrap">
    <!-- 详情页照片 -->
    <div class="discover-detail-photo">
      <!-- 详情页照片头部 -->
      <div class="discover-detail-photo-header">
        <div class="back" @click="toBack">&lt;</div>
        <div class="share">&gt;</div>
      </div>
      <!-- 详情页banner轮播图 -->
      <van-swipe @change="onChange" :loop="false">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
    <!-- 详情页主要内容 -->
    <div class="discover-detail-main">
      <div class="discover-detail-author">
        <div class="discover-detail-author-headshot">
          <img src alt />
        </div>
        <div class="discover-detail-author-info">
          <p class="discover-detail-author-name">还是孩子~</p>
          <p class="discover-detail-author-date">4-10</p>
        </div>
        <p class="discover-detail-author-likes">点赞349</p>
      </div>
      <div class="discover-detail-content">
        <span class="city">武汉</span>
        <span class="title">圣托里尼洞穴风 设计感超强 武汉民宿</span>
        <span class="describle">
          圣托里尼洞穴风！
          <br />宽敞落地窗、网红浴缸！
          <br />顶层观景平台可以俯瞰江景！
          <br />
          <br />房间里墙壁都是凹凸不平的，是很真实的粗糙颗粒感！
          <br />而且每一个角落都非常适合拍照，就是这种
          <br />既文艺又有格调的感觉！
          <br />
          <br />还有一次性泡澡袋和星空泡泡球，晚上回到房
          <br />间泡个澡超放松~
          <br />
          <br />地址：武汉-武昌区-徐家棚街街道汉飞滨江国
          <br />际
        </span>
      </div>
      <p class="discover-detail-comment-num">1条评论</p>
      <div class="discover-detail-comment-msg">据说写评论才是最好的赞美</div>
      <p>
        花花世界
        <span>8-10</span>
      </p>
      <div class="discover-detail-comment-msg">
        <p>
          还是孩子~（作者）：
          <span>而且露台的风景也很棒</span>
        </p>
      </div>
      <div>推荐房源</div>
      <van-swipe :loop="false" :width="300" :show-indicators="false">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div>查看往期精选名宿</div>
      <input type="text" placeholder="添加一条评论" />
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">直达房源</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    toBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.discover-detail-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 375px;
  .discover-detail-photo-header {
    width: 100%;
    height: 50px;
    background: white;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    .back,
    .share {
      color: orange;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .back {
      left: 10px;
    }
    .share {
      right: 10px;
    }
  }
  .discover-detail-main {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    .discover-detail-author {
      padding: 13px 0;
      margin-top: 6px;
      border-bottom: 1px solid #e1e1e1;
      .discover-detail-author-headshot {
        width: 37px;
        height: 37px;
        background: skyblue;
        border-radius: 50%;
        float: left;
      }
      .discover-detail-author-info {
        float: left;
        margin-left: 14px;
        .discover-detail-author-name {
          margin: 0;
          color: #333333;
          font-size: 14px;
        }
        .discover-detail-author-date {
          margin: 3px 0 0 0;
          color: #999999;
          font-size: 11px;
        }
      }
      .discover-detail-author-likes {
        float: right;
        color: #000000;
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        margin: 10px 0 0 0;
      }
    }
    .discover-detail-content {
      display: flex;
      flex-direction: column;
      padding-bottom: 53px;
      .city {
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        color: #999999;
        margin: 10px 0;
      }
      .title {
        font-size: 21px;
        font-family: PingFang;
        font-weight: bold;
        color: #333333;
      }
      .describle {
        margin-top: 20px;
        font-size: 16px;
        font-family: PingFang;
        font-weight: bold;
        color: #5f5f5f;
        line-height: 34px;
      }
    }
  }
  .van-swipe {
    height: 276px;
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: skyblue;
    }
    .custom-indicator {
      width: 44px;
      height: 22px;
      text-align: center;
      line-height: 23px;
      color: white;
      position: absolute;
      border-radius: 12px;
      right: 10px;
      bottom: 8px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>