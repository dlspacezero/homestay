<template>
  <div class="nologinContainer">
    <img :src="imgurl" alt="pic" class="empty-img" />
    <p>登录后可查看您的收藏~</p>
    <img :src="btnurl" alt="pic" class="btn-img" />
  </div>
</template>

<script>
import imgurl from "@/assets/imgs/sc_icon.png";
import btnurl from "@/assets/imgs/dl_icon.png";
export default {
  data() {
    return {
      imgurl: imgurl,
      btnurl: btnurl,
    };
  },
};
</script>

<style lang="scss">
.nologinContainer {
  position: relative;
  padding-top: 125px;
  .empty-img {
    display: block;
    width: 72px;
    height: 72px;
    margin: 0 auto;
  }
  p {
    height: 47px;
    line-height: 47px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #999999;
  }
  .btn-img {
    display: block;
    width: 158px;
    height: 40px;
    margin: 7px auto 0;
  }
}
</style>