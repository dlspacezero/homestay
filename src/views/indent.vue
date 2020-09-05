<template>
  <div class="orderContainer">
    <!-- 订单页 -->
    <van-nav-bar title="订单" left-arrow @click-left="toMine" class="van-hairline--bottom" />
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="item in tabArr" :title="item.bar" :key="item.bar">
        <!-- 如果数据为空时显示 -->
        <OrderEmpty :title="item.emptytitle"></OrderEmpty>
        <!-- 数据不为空时，显示渲染列表 （组件）-->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderEmpty from "@/components/order/orderempty.vue";
export default {
  data() {
    return {
      active: 0,
      tabArr: [
        {
          bar: "进行中",
          emptytitle: "暂无进行中订单",
          dataList: [],
        },
        {
          bar: "已结束",
          emptytitle: "暂无已结束订单",
          dataList: [],
        },
      ],
    };
  },
  components: {
    OrderEmpty,
  },
  methods: {
    toMine() {
      this.$router.replace("/mine");
    },
  },
};
</script>

<style lang="scss" scoped>
.orderContainer {
  // 页面底色，列表未铺满时的边缘色，暂时设定色，如有设计颜色，可替换
  min-height: 100vh;
  background: #f7f7f7;
  font-family: PingFang SC;

  // 头部样式
  ::v-deep .van-nav-bar {
    height: 49px;
    .van-nav-bar__title {
      font-size: 15px;
      font-weight: 600;
      color: #333333;
    }
  }
  ::v-deep .van-nav-bar .van-icon {
    color: #fe9180;
  }
  // tab-bar样式
  .van-tabs {
    margin: 0;
    min-height: calc(100vh - 50px);
  }
  .van-tabs .van-tabs__wrap {
    margin: 0;
  }
  .van-tabs .van-tabs__nav {
    background: #fff;
  }
  .van-tabs .van-tabs__wrap .van-tab {
    width: 50%;
    padding: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  ::v-deep .van-tabs--line .van-tabs__wrap {
    height: 33px;
    font-size: 13px;
    font-weight: 400;
    color: #333333;
    .van-tab--active {
      color: #fe9180;
      font-weight: 500;
    }
    .van-tabs__line {
      width: 44px;
      height: 2px;
      background: #f09685;
    }
  }
}
</style>