<template>
  <div class="main-wrap">
    <!-- 发现页tab切换 -->
    <ul class="tabswitch">
      <li
        v-for="(item,index) in tabswitch"
        :key="index"
        @click="tabClick(index)"
        :class="{active:index===isActive}"
      >{{item}}</li>
    </ul>
    <!-- 发现页banner轮播 -->
    <van-swipe
      @change="onChange"
      class="my-swipe"
      :loop="false"
      :show-indicators="false"
      :stop-propagation="false"
      ref="changebanner"
    >
      <!-- 推荐 -->
      <van-swipe-item>
        <rec />
      </van-swipe-item>
      <!-- 网红民宿 -->
      <van-swipe-item>
        <hot />
      </van-swipe-item>
      <!-- 体验分享 -->
      <van-swipe-item>
        <exp />
      </van-swipe-item>
      <!-- 特色房源 -->
      <van-swipe-item>
        <spe />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import rec from "./do-rec";
import hot from "./do-hot";
import exp from "./do-exp";
import spe from "./do-spe";
export default {
  data() {
    return {
      tabswitch: ["推荐", "网红民宿", "体验分享", "特色房源"],
      isActive: 0,
      isLoading: false,
    };
  },
  components: {
    rec,
    hot,
    exp,
    spe,
  },
  methods: {
    // 点击tab滑动下面的轮播
    tabClick(i) {
      // this.isActive = i;
      this.$refs.changebanner.swipeTo(i);
    },
    // 滑动下面的轮播上面的tab切换
    onChange(i) {
      this.isActive = i;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/style/command.scss";
.main-wrap {
  // 发现页tab切换
  .tabswitch {
    background: white;
    z-index: 2;
    position: fixed;
    top: 44px;
    left: 0;
    display: flex;
    width: 375px;
    height: 46px;
    border-bottom: 1px solid #e1e1e1;
    li {
      font-size: 15px;
      color: #999999;
      font-weight: 500;
      @include pingfang;
      height: 43px;
      line-height: 46px;
      margin: 0 16px 0 16px;
    }
    .active {
      color: $themecolor;
      border-bottom: 3px solid;
    }
  }
  // 发现页轮播图
  .my-swipe {
    margin-top: 91px;
    .iconfont {
      display: inline-block;
      margin-left: 15px;
      color: #7b7b7b;
      font-size: 14px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>