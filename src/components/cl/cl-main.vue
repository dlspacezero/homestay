<template>
  <div class="clMainContainer">
    <!-- 收藏主页头部 -->
    <van-tabs v-model="active" class="cl-main-tabs">
      <van-tab title="收藏">
        <!-- 登录，且有收藏数据时显示 -->
        <div class="topChoose">
          <div class="date after-icon" @click="toChooseDate">{{start}}-{{end}}</div>
          <div class="city after-icon" @click="toChooseCity">{{clChooseCity}}</div>
          <div class="sort after-icon" @click="toChooseSorts">{{clChooseSort}}</div>
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
        <ClNoSku v-if="!collectData && !token"></ClNoSku>
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
    2.登录状态  显示收藏列表  （单独组件） 跳转详情（单独页面）
                显示“看看其他人收藏了什么” （单独组件）
二、浏览记录 
   1.未登录  显示记录列表 

    -->
  </div>
</template>

<script>
// 引入模块
import ClMore from "./cl-more";
import ClList from "./cl-list";
import ClNoLogin from "./cl-nologin";
import ClNoSku from "./cl-nosku";
import ClBrowsingHistory from "./cl-browsing-history";

// 获取数据
import { mapState } from "vuex";

export default {
  data() {
    return {
      active: 0,
      token: "",
      collectData: "",
      start: "", //开始日期
      end: "", //结束日期
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
    this.initDate();
  },
  computed: {
    ...mapState(["clChooseCity", "clChooseSort", "date"]),
  },
  methods: {
    toChooseDate() {
      // 路由到日期选择页
      // 选择入住日期，离馆日期，自动跳转到主页，并将日期数据给主页显示，发送请求，进行可选的收藏店铺渲染
      this.$router.push("/calendar");
    },
    toChooseCity() {
      // 路由到城市选择页，
      // 选择城市，自动跳转到主页，并将城市数据给主页显示，发送请求，进行可选的收藏店铺渲染
      this.$router.push("/cl-choose-city");
    },
    toChooseSorts() {
      // 路由到排序选择页
      // 点击一次选项，进行判断是否和上一次点击同一个选项，
      // 如果是不做请求，跳转回收藏主页面，不用再次渲染，
      // 如果不是发送相应请求，跳转回收藏主页面，进行数据渲染，
      // 或者将请求过的排序数据存入sessionStorage,再次点击相应排序时，不用发送请求，从本地取数据渲染，缺点：不能即时更新，容易超出体积
      this.$router.push("/cl-choose-sort");
    },
    //对开始日期和退房日期进行设置
    initDate() {
      let start = 0;
      let end = 0;
      //如果从日历上选择了日期
      if (this.date.status === 0) {
        start = this.date.start.getTime();
        end = this.date.end.getTime();
        //天数
        this.daynum = (end - start) / 86400000; //86400000一天的毫秒数
      } else {
        //如果没有选择日期
        //默认为今天和明天
        //今天
        start = this.date.start;
        //明天
        end = this.date.end;
      }
      //转换日期格式
      this.start = this.formatDate(start);
      this.end = this.formatDate(end);
    },
    formatDate(date) {
      //将日期格式为9月6日格式
      //转换为日期对象
      const dateObject = new Date(date);
      //加一是因为月份是0~11来表示的
      let month = dateObject.getMonth() + 1;
      //获取天数
      let day = dateObject.getDate();
      return `${month}.${day}`;
    },
  },
};
</script>

<style lang="scss">
.clMainContainer {
  min-height: calc(100vh - 100px);
  background: #f7f7f7;
  font-family: PingFang SC;
  height: 100%;
  position: relative;
  .topChoose {
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 10;
    width: 375px;
    height: 46px;
    background: #ffffff;
    padding-left: 15px;
    display: flex;
    .after-icon {
      line-height: 46px;
      font-size: 11px;
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
    margin-top: 50px;
    // height: 673px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .van-tabs {
    margin: 0;
  }
  .van-tabs__nav--line {
    box-sizing: content-box;
    height: 100%;
    padding-bottom: 0;
  }
  .van-tabs--line .van-tabs__wrap {
    width: 375px;
    position: fixed;
    top: 0px;
    left: 0;
    margin: 0;
    z-index: 5000;
    height: 49px;
    background: #ffffff;
    font-size: 14px;
    border-bottom: 1px solid #e1e1e1;
    .van-tabs__nav {
      padding-left: 14px;

      .van-tab {
        font-size: 15px;
        font-weight: 500;
        height: 49px;
        width: auto;
        text-align: start;
        color: #999999;
        flex: 0 1 auto;
        padding: 0 15px;
      }
      .van-tab--active {
        color: #ff917f;
      }
    }
    .van-tabs__line {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 333;
      width: 16px;
      height: 3px;
      background: #ff917f;
      border-radius: 1px;
    }
  }
}
</style>
