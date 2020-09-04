<template>
  <div class="homeContainer">
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active="{ active }"
      active-color="#FF9181"
      inactive-color="#999999"
      route
      :placeholder="true"
    >
      <van-tabbar-item
        :icon="item.icon"
        v-for="(item, index) in tabList"
        :key="index"
        :to="item.to"
      >{{ item.title }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: [
        {
          icon: "home-o",
          title: "推荐",
          to: "/index",
        },
        {
          icon: "search",
          title: "收藏",
          to: "/collect",
        },
        {
          icon: "friends-o",
          title: "发现",
          to: "/discover",
        },
        {
          icon: "setting-o",
          title: "消息",
          to: "/message",
        },
        {
          icon: "setting-o",
          title: "我的",
          to: "/mine",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang='scss' ></style>
