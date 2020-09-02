<template>
  <div class="noskuContainer">
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="您目前还未收藏任何房间~"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.noskuContainer {
  position: relative;
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
}
</style>