<template>
  <div class="orderContainer">
    <!-- 订单页 -->
    <van-nav-bar title="订单" left-arrow @click-left="toMine" class="van-hairline--bottom" />
    <van-tabs v-model="active" swipeable>
      <!-- 进行中 -->
      <van-tab :title="tabArr[0].bar">
        <div class="orderListContainer" ref="orderListContainer">
          <div>
            <!-- 数据不为空时，显示渲染列表 （组件）-->
            <!-- 进行中 订单详细信息 -->
            <ordering v-if="tabArr[0].dataList" />
            <p class="noMoreMsg" v-if="tabArr[0].dataList">没有更多了~</p>
            <!-- 如果数据为空时显示 -->
            <OrderEmpty :title="tabArr[0].emptytitle" v-else></OrderEmpty>
          </div>
        </div>
      </van-tab>
      <!-- 已结束 -->
      <van-tab :title="tabArr[1].bar">
        <div class="orderListContainer" ref="listContainer">
          <div>
            <!-- 数据不为空时，显示渲染列表 （组件）-->
            <!-- 已完成 订单详细信息 -->
            <orderfinish v-if="tabArr[1].dataList" />
            <p class="noMoreMsg" v-if="tabArr[1].dataList">没有更多了~</p>
            <!-- 如果数据为空时显示 -->
            <OrderEmpty :title="tabArr[1].emptytitle" v-else></OrderEmpty>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderEmpty from "@/components/order/orderempty.vue";
import ordering from "@/components/order/order-ing.vue";
import orderfinish from "@/components/order/order-finish.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      active: 0,
      tabArr: [
        {
          bar: "进行中",
          emptytitle: "暂无进行中订单",
          dataList: [], //获取数据列表数据，后期初始设置为 ''
        },
        {
          bar: "已结束",
          emptytitle: "暂无已结束订单",
          dataList: [], //获取数据列表数据，后期初始设置为 ''
        },
      ],
    };
  },
  components: {
    OrderEmpty,
    ordering,
    orderfinish,
  },
  mounted() {
    this.leftBetterScroll();
  },
  updated() {
    this.rightBetterScroll();
  },
  methods: {
    toMine() {
      this.$router.replace("/mine");
    },
    // 进行中上拉
    leftBetterScroll() {
      this.$nextTick(() => {
        const bscroll = new BScroll(this.$refs.orderListContainer, {
          click: true,
          scrollY: true,
        });
      });
    },
    // 已结束上拉，刚进页面时，本页面display:none;所以把本方法放在updated
    rightBetterScroll() {
      this.$nextTick(() => {
        const bscroll = new BScroll(this.$refs.listContainer, {
          click: true,
          scrollY: true,
        });
      });
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
  // 滚动区间添加样式
  .orderListContainer {
    height: calc(100vh - 75px);
    overflow: hidden;
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
    .van-tabs__nav--line {
      padding-bottom: 0;
    }
    .van-tabs__line {
      width: 44px;
      height: 2px;
      background: #f09685;
      bottom: 0;
    }
  }
  .noMoreMsg {
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999999;
    margin-top: 20px;
  }
}
</style>