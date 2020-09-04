<template>
  <!-- 详情页外围 -->
  <div class="discover-detail-wrap">
    <!-- 详情页照片 -->
    <div class="discover-detail-photo">
      <!-- 详情页照片头部 -->
      <div class="discover-detail-photo-header" :style="{display:disappear,background:bgColor}">
        <span class="iconfont icon-arrow-right" @click="toBack" :style="{color:activeColor}"></span>
        <van-cell @click="showShare = true" class="share">
          <span class="iconfont icon-zhuanfa" :style="{color:activeColor}"></span>
        </van-cell>
        <van-share-sheet v-model="showShare" :options="options" @select="onSelect" />
      </div>
      <!-- 详情页banner轮播图 -->
      <van-swipe @change="onChange" :loop="false">
        <van-swipe-item v-for="(item,index) in 4" :key="index">
          <div class="bigphoto">
            <img src="../../assets/images/hs-photo-01.jpg" alt />
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
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
    <!-- 详情页推荐房源 -->
    <ul class="recommendHome">
      <li v-for="(item,index) in 4" :key="index">
        <div class="photo">
          <img src="../../assets/images/hs-photo-01.jpg" alt />
        </div>
        <p class="type">整租-普通公寓-宜住2人</p>
        <p class="info">【有時 鼠尾草海盐还有江景房】</p>
        <p class="price">¥558</p>
      </li>
    </ul>
    <!-- 详情页往期精选 -->
    <div class="discover-detail-past" @click="toDiscover">
      <p>查看往期精选名宿</p>
      <span class="iconfont icon-arrow-left-copy"></span>
    </div>
    <!-- 详情页底部添加评论 -->
    <div class="discover-detail-footer">
      <van-cell is-link @click="showPopup">
        <div class="addmsg">添加一条评论</div>
      </van-cell>
      <van-popup
        v-model="show"
        position="bottom"
        closeable
        close-icon-position="top-left"
        @close="closeMsg"
      >
        <div class="publish" @click="addmsg">发表</div>
        <div class="publish-msg">发表评论</div>
        <van-field
          v-model="message"
          rows="5"
          autosize
          type="textarea"
          maxlength="50"
          placeholder="写评论。。。"
          show-word-limit
          @input="inputMsg"
        />
      </van-popup>
      <van-button
        @click="toIndex"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        size="small"
        round
      >直达房源</van-button>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      current: 0,
      show: false,
      message: "",
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "朋友圈", icon: "wechat" },
        { name: "QQ", icon: "qq" },
        { name: "QQ空间", icon: "qq" },
        { name: "微博", icon: "weibo" },
      ],
      activeColor: "white",
      disappear: "flex",
      bgColor: "transparent",
      scroll: "",
      num: 0,
      likesColor: "#7b7b7b",
      numsColor: "#999999",
      numbers: "",
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
    // 头部照片轮播改变对应索引
    onChange(index) {
      this.current = index;
    },
    // 头部照片返回上一级路由
    toBack() {
      this.$router.go(-1);
    },
    // 关闭发表评论，照片头部显示
    closeMsg() {
      this.disappear = "flex";
    },
    // 照片头部分享 底部弹出层
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    // 查看往期名宿 去发现页
    toDiscover() {
      this.$router.push("/discover");
    },
    // 直达房源去 首页
    toIndex() {
      this.$router.push("/index");
    },
    // 点赞改变颜色
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
    // 发表评论遮罩层显示，照片头部隐藏
    showPopup() {
      this.show = true;
      this.disappear = "none";
    },
    // 发表评论不为空
    addmsg() {
      if (this.message !== "") {
        Toast("点评成功！");
        setTimeout(() => {
          this.show = false;
        }, 900);
      } else {
        Toast("请输入内容");
      }
    },
    // 发表评论字数超过50
    inputMsg() {
      if (this.message.toString().length > 49) {
        Toast("最多输入50个字");
        this.show = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
};
</script>

<style lang="scss">
@import "../../assets/style/command.scss";
.discover-detail-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 375px;
  .discover-detail-photo-header {
    width: 100%;
    height: 50px;
    background: transparent;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-arrow-right {
      margin-left: 10px;
      color: white;
    }
    .share {
      padding: 0;
      width: 18px;
      margin-right: 10px;
      background: transparent;
    }
    .icon-zhuanfa {
      color: white;
    }
    .van-popup--bottom.van-popup--round {
      border-radius: 0;
      .van-share-sheet__options {
        overflow: hidden;
        margin-left: -20px;
        border-radius: 0;
      }
      .van-share-sheet__cancel {
        background: #e1e1e1;
      }
    }
  }
  .bigphoto {
    height: 276px;
    img {
      height: 276px;
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
  .van-swipe {
    height: 276px;
    background: skyblue;
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
  .recommendHome {
    background: none;
    height: 190px;
    margin-top: 20px;
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      width: 150px;
      margin-left: 15px;
    }
    .photo {
      width: 150px;
      height: 95px;
      background: skyblue;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .type {
      @include singleomit;
      line-height: 22px;
      font-size: 11px;
      font-family: PingFang-SC-Medium;
      font-weight: bold;
      color: #656565;
    }
    .info {
      @include singleomit;
      text-indent: 6px;
      line-height: 22px;
      color: #333333;
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
    }
    .price {
      line-height: 32px;
      color: #fe907f;
      font-size: 12px;
    }
  }
  .discover-detail-past {
    margin: 0 15px 70px;
    height: 60px;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #333333;
      font-size: 15px;
      font-family: PingFang-SC-Medium;
      font-weight: SC-Medium;
    }
    span {
      color: #999999;
    }
  }
  .discover-detail-footer {
    width: 345px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 10px;
    @include commonfont;
    color: #999999;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    .van-cell__right-icon {
      display: none;
    }
    .van-popup--bottom {
      height: 100%;
      background: white;
      .publish {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 15px;
        color: $themecolor;
      }
      .publish-msg {
        padding: 15px 15px;
        font-size: 20px;
        color: #333333;
        margin-top: 60px;
        border-bottom: 4px solid #e1e1e1;
      }
      .van-cell {
        border-bottom: 1px solid #e1e1e1;
        .van-field__word-limit {
          margin-top: 50px;
          color: $themecolor;
        }
      }
    }
    .addmsg {
      width: 265px;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #e1e1e1;
    }
    .van-button--small {
      width: 78px;
      height: 26px;
    }
  }
}
</style>