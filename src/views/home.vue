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
    >
      <van-tabbar-item
        v-for="(item, index) in tabList"
        :key="index"
        :to="item.to"
      >{{ item.title }}
      <template>
        <span style="display:block; width:44px; height:46px; background-size:315px" :style="[bg , active==index?item.position1:item.position2]"></span>
      </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import imgUrl from '../assets/imgs/icon.png'
export default {
  data() {
    return {
      active: 0,
      //设置背景图片
      bg:{
          backgroundImage:`url(${imgUrl})`,
      },
      tabList: [
        {
          to: "/index",
          // 设置图片定位
          position1:{
              backgroundPosition:'-50px -208px'
          },
          position2:{
              backgroundPosition:'-50px -146px'
          }
        },
        {
          to: "/collect",
          position1:{
              backgroundPosition:'-240px -206px'
          },
          position2:{
              backgroundPosition:'-240px -146px'
          }
        },
        {
          to: "/discover",
          position1:{
              backgroundPosition:'-97px -207px'
          },
          position2:{
              backgroundPosition:'-97px -146px'
          }
        },
        {
          to: "/message",
          position1:{
              backgroundPosition:'-150px -206px'
          },
          position2:{
              backgroundPosition:'-150px -146px'
          }
        },
        {
          to: "/mine",
          position1:{
              backgroundPosition:'-197px -206px'
          },
          position2:{
              backgroundPosition:'-197px -146px'
          }
        },
      ],
    };
  },
  methods: {},
  mounted(){
    
  }
};
</script>
<style lang='scss' ></style>
