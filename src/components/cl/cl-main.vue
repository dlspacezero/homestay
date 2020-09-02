<template>
  <div class="clMainContainer">
    <!-- 收藏主页头部 -->
    <van-tabs v-model="active" sticky>
      <van-tab title="收藏">
        <!-- 登录，且有收藏数据时显示 -->
        <div class="topChoose">
          <div class="date after-icon">选择入离时间</div>
          <div class="city after-icon">全部城市</div>
          <div class="sort after-icon">默认排序</div>
        </div>
        <div class="scrollWrap">
          <!-- 登录，且有收藏数据时显示 -->
          <ClList></ClList>
          <!-- 无论是否登录，都显示 -->
          <ClMore></ClMore>
        </div>
        <!-- 未登录 -->
        <!-- <ClNoLogin v-if="!token"></ClNoLogin> -->
        <!-- 登录，但收藏为空 -->
        <!-- <ClNoSku v-if="!collectData && token"></ClNoSku> -->
      </van-tab>
      <van-tab title="浏览记录">
        <ClBrowsingHistory></ClBrowsingHistory>
      </van-tab>
    </van-tabs>
    <!-- 
思路分析：
header Tab切换  收藏和浏览记录 两大组件
页面所有的图片列表 点击直接进入详情页 左上角有♥ 图标，点击 收藏和取消收藏
一、收藏  
    1.未登录 只显示“看看其他人收藏了什么” 点击查看更多时，页面直接跳转到 “‘他们’收藏的美馆”（单独页面）
            登录/注册按钮   跳转到 /login 页面
    2.登录状态  显示收藏列表  （单独组件） 跳转收藏详情（单独页面）
                显示“看看其他人收藏了什么” （单独组件）
二、浏览记录 
   1.未登录  显示记录列表 

    -->
  </div>
</template>

<script>
import ClMore from "./cl-more";
import ClList from "./cl-list";
import ClNoLogin from "./cl-nologin";
import ClNoSku from "./cl-nosku";
import ClBrowsingHistory from "./cl-browsing-history";
export default {
  data() {
    return {
      active: 0,
      token: "",
      collectData: "",
    };
  },
  components: {
    ClMore,
    ClList,
    ClNoLogin,
    ClNoSku,
    ClBrowsingHistory,
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>

<style lang="scss" >
.clMainContainer {
  background: #e1e1e1;
  position: relative;

  .topChoose {
    position: sticky;
    // position: fixed;
    top: 50px;
    // left: 0;
    z-index: 10;
    width: 375px;
    height: 46px;
    background: #ffffff;
    padding-left: 15px;
    display: flex;
    .after-icon {
      line-height: 46px;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      margin-right: 20px;
      &::after {
        content: "";
        margin-left: 5px;
        display: inline-block;
        height: 0;
        width: 0;
        border: 2px solid #000;
        border-color: transparent #000 #000 transparent;
      }
    }
  }
  .scrollWrap {
    // margin-top: 46px;
    // height: 673px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .van-tabs--line .van-tabs__wrap {
    width: 375px;
    height: 49px;
    background: #ffffff;
    font-size: 14px;
    border-bottom: 1px solid #e1e1e1;
    .van-tabs__nav {
      padding-left: 14px;
      .van-tab {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #999999;
        flex: 0 1 auto;
        &:active {
          color: #ff917f;
        }
      }
    }
    .van-tabs__line {
      position: absolute;
      left: 0;
      z-index: 1;
      width: 16px;
      height: 3px;
      background: #ff917f;
      border-radius: 1px;
    }
  }
}
</style>
