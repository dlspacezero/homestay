<template>
  <!-- 详情页主要内容 -->
  <div class="discover-detail-main">
    <div class="discover-detail-author">
      <div class="discover-detail-author-headshot">
        <img src="../../assets/images/touxiang.jpg" alt />
      </div>
      <div class="discover-detail-author-info">
        <p class="discover-detail-author-name">还是孩子~</p>
        <p class="discover-detail-author-date">4-10</p>
      </div>
      <p class="discover-detail-author-likes" @click="likes" :style="{color:likesColor}">
        <span class="iconfont icon-dianzan" :style="{color:numsColor}" ref="number">349</span>
      </p>
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
    <div class="discover-detail-comment-num">2条评论</div>
    <div class="discover-detail-comment-msg">据说写评论才是最好的赞美</div>
    <div v-for="(item,index) in 2" :key="index">
      <p class="discover-detail-comment-num">
        花花世界
        <span class="date">8-10</span>
      </p>
      <p class="discover-detail-comment-message">还挺好看的</p>
      <div class="discover-detail-comment-msg">
        <p class="author">
          还是孩子~(作者):
          <span class="discover-detail-comment-msg">而且露台的风景也很棒!</span>
        </p>
      </div>
    </div>
    <div class="discover-detail-comment-num discover-detail-comment-recommend">推荐房源</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      likesColor: "#7b7b7b",
      numsColor: "#999999",
      numbers: "",
    };
  },
  methods: {
    // 点赞改变颜色，改变点赞数量
    likes() {
      if (this.num == 0) {
        this.likesColor = "#FF9180";
        this.numsColor = "#FF9180";
        this.num = 1;
        this.$refs.number.innerHTML = +this.$refs.number.innerHTML + 1;
      } else if (this.num == 1) {
        this.likesColor = "#7b7b7b";
        this.numsColor = "#999999";
        this.num = 0;
        this.$refs.number.innerHTML = +this.$refs.number.innerHTML - 1;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/style/command.scss";
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
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
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
      .icon-dianzan {
        color: #7b7b7b;
      }
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
  .discover-detail-comment-num {
    @include pingfang;
    font-size: 18px;
    line-height: 59px;
    color: #333333;
    font-weight: bold;
    border-top: 1px solid #e1e1e1;
    .date {
      color: #999999;
      font-size: 11px;
    }
  }
  .discover-detail-comment-msg {
    background: #f3f3f3;
    height: 55px;
    line-height: 55px;
    text-indent: 13px;
    color: #999999;
    font-size: 18px;
    font-family: PingFang-SC-Medium;
    .author {
      font-family: PingFang-SC-Medium;
      font-weight: SC-Medium;
      color: #333333;
      font-size: 15px;
    }
  }
  .discover-detail-comment-message {
    font-family: PingFang-SC-Medium;
    font-weight: SC-Medium;
    color: #999999;
    font-size: 15px;
    margin-bottom: 19px;
  }
  .discover-detail-comment-recommend {
    margin-top: 25px;
    border: none;
    border-bottom: 1px solid #e1e1e1;
  }
}
</style>