<template>
  <div class="noskuContainer">
    <img :src="imgurl" alt="pic" class="empty-img" />
    <p>您还没有收藏美馆哦~</p>
  </div>
</template>

<script>
import imgurl from "@/assets/imgs/sc_icon.png";
export default {
  data() {
    return {
      imgurl: imgurl,
    };
  },
};
</script>

<style lang="scss">
.noskuContainer {
  position: relative;
  padding: 125px 0 55px;
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
}
</style>