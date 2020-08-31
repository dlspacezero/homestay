<template>
  <!-- 发现页 -->
  <div class="find-wrap">
    <!-- 发现页标题 -->
    <p class="find-title">发现</p>

    <!-- 发现页tab切换 -->
    <van-tabs
      v-model="active"
      color="#FF9180"
      title-active-color="#FF9180"
      title-inactive-color="#999999"
    >
      <van-tab
        @click="onClick"
        v-for="(item,index) in tabswitch"
        :key="index"
        :title="item.title"
      >{{item.content}}</van-tab>
    </van-tabs>

    <!-- 发现页banner轮播 -->
    <van-swipe @change="onChange" class="my-swipe" :loop="false" :show-indicators="false">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      index: 0,
      tabswitch: [
        {
          title: "推荐",
          content: "猜你喜欢",
        },
        {
          title: "网红民宿",
          content: "",
        },
        {
          title: "体验分享",
          content: "",
        },
        {
          title: "特色房源",
          content: "",
        },
      ],
    };
  },
  methods: {
    onClick() {
      this.index = active;
    },
    onChange(index) {
      this.active = index;
    },
  },
};
</script>
<style lang='scss' >
.find-wrap {
  display: flex;
  flex-direction: column;

  .find-title {
    margin: 0;
    width: 375px;
    height: 44px;
    font-size: 27px;
    font-family: PingFang;
    font-weight: 700;
    line-height: 44px;
    text-indent: 15px;
  }
  .van-tabs__nav--line {
    height: 49px;
    padding-bottom: 10px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>