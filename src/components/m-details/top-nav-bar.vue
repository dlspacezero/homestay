<template>
  <div class="top-nav-bar-container">
    <van-nav-bar
      left-arrow
      :border="false"
      z-index="600"
      fixed
      class="topbar-none"
      v-show="scrollflag===false"
      @click-left="onClickLeft"
    >
      <template #right>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click="unLike(like)" />
        <img :src="iconfx" alt="pic" class="icon_fx" @click="showShare = true" />
      </template>
    </van-nav-bar>
    <!-- --------------- -->
    <van-nav-bar
      :title="toptitle"
      left-arrow
      z-index="600"
      fixed
      placeholder
      class="topbar-haveid"
      v-show="scrollflag===true"
      @click-left="onClickLeft"
    >
      <template #right>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click="unLike(like)" />
        <img :src="detail_icon" alt="pic" class="icon_fx detail-icon" @click="showShare = true" />
      </template>
    </van-nav-bar>
    <!-- 分享面板 -->
    <van-share-sheet
      v-model="showShare"
      :options="options"
      cancel-text
      @select="onSelect"
      get-container=".top-nav-bar-container"
    />
  </div>
</template>

<script>
import iconfx from "@/assets/imgs/maindetailsicon/icon_fx.png";
import detail_icon from "@/assets/imgs/maindetailsicon/detail_icon.png";
import likeimg from "@/assets/imgs/icon_sc.png";
import unlikeimg from "@/assets/imgs/icon_sc2.png";
export default {
  data() {
    return {
      scrollflag: false,
      id: 12221,
      like: 0,
      unlikeimg: unlikeimg,
      likeimg: likeimg,
      iconfx: iconfx,
      detail_icon: detail_icon,
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
          { name: "QQ空间", icon: "qrcode" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
    };
  },
  mounted() {
    this.listenerFunction();
  },
  computed: {
    toptitle() {
      return "房间编号" + this.id;
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    listenerFunction(e) {
      document.addEventListener("scroll", this.handleScroll, true);
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= 180) {
        this.scrollflag = true;
      } else {
        this.scrollflag = false;
      }
    },
    Like(like) {
      this.$toast({
        message: "收藏成功！",
        position: "bottom",
        className: "cl-detail-toast",
        getContainer: ".top-nav-bar-container",
      });
      this.like = 1;
    },
    unLike(like) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "是否取消收藏？",
          confirmButtonText: "是",
          confirmButtonColor: "#ff917f",
          cancelButtonText: "否",
          overlayStyle: { backgroundColor: "rgba(125, 125, 125, 0.4)" },
          getContainer: ".top-nav-bar-container",
        })
        .then((like) => {
          this.like = 0;
          this.$toast({
            message: "取消收藏成功！",
            position: "bottom",
            className: "cl-detail-toast",
            getContainer: ".top-nav-bar-container",
          });
        });
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-nav-bar-container {
  ::v-deep .van-nav-bar {
    height: 49px;
  }
  .topbar-none {
    background: rgba($color: #fff, $alpha: 0);
  }
  ::v-deep .van-nav-bar .van-icon {
    color: #fff;
  }
  .topbar-haveid {
    background: rgba($color: #fff, $alpha: 1);
    ::v-deep .van-nav-bar .van-icon {
      color: #fe9180;
    }
  }
  .like,
  .icon_fx {
    width: 22px;
    height: 22px;
    background: transparent;
    margin-left: 20px;
  }
  .detail-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 3px 3px 3px 23px;
  }
  ::v-deep .van-nav-bar__title {
    color: #bababa;
    font-size: 12px;
    max-width: auto;
  }
  ::v-deep .van-overlay {
    background-color: rgba(125, 125, 125, 0.4);
  }
  .van-popup--bottom.van-popup--round {
    border-radius: 0;
  }

  // 提示信息样式
  ::v-deep .van-toast {
    background-color: rgba(125, 125, 125, 0.4);
  }
}
</style>