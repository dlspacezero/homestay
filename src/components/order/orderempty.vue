<template>
  <div class="orderEmpty">
    <img :src="imgurl" alt="pic" />
    <p class="title">{{title}}</p>
  </div>
</template>

<script>
import icon from "@/assets/imgs/order_icon.png";
export default {
  props: {
    title: String,
  },
  data() {
    return {
      imgurl: icon,
    };
  },
};
</script>

<style lang="scss" >
.orderEmpty {
  //   height: 688px;
  padding: 240px 0 175px;
  img {
    display: block;
    width: 109px;
    height: 109px;
    margin: 0 auto;
  }
  .title {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 19px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ababab;
  }
}
</style>