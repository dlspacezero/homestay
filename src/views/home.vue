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
      z-index="20"
      class="footer"
    >
      <van-tabbar-item
        v-for="(item, index) in tabList"
        :key="index"
        :to="item.to"
        style="flex:1,width:20%"
      >
        {{ item.title }}
        <template>
          <span
            style="display:block; width:44px; height:46px; background-size:315px"
            :style="[bg , active==index?item.position1:item.position2]"
          ></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import imgUrl from "../assets/imgs/icon.png";
export default {
  data() {
    return {
      active: 0,
      //设置背景图片
      bg: {
        backgroundImage: `url(${imgUrl})`,
      },
      tabList: [
        {
          to: "/index",
          // 设置图片定位
          position1: {
            backgroundPosition: "-50px -208px",
          },
          position2: {
            backgroundPosition: "-50px -146px",
          },
        },
        {
          to: "/collect",
          position1: {
            backgroundPosition: "-240px -206px",
          },
          position2: {
            backgroundPosition: "-240px -146px",
          },
        },
        {
          to: "/discover",
          position1: {
            backgroundPosition: "-97px -207px",
          },
          position2: {
            backgroundPosition: "-97px -146px",
          },
        },
        {
          to: "/message",
          position1: {
            backgroundPosition: "-150px -206px",
          },
          position2: {
            backgroundPosition: "-150px -146px",
          },
        },
        {
          to: "/mine",
          position1: {
            backgroundPosition: "-197px -206px",
          },
          position2: {
            backgroundPosition: "-197px -146px",
          },
        },
      ],
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
  updated() {
    // this.scrollinit();
  },
};
</script>
<style lang='scss' >
@import "../assets/style/home.css";
.homeContainer {
  width: 100%;
  height: 100%;
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 51px;
  right: 0;
}

</style>
