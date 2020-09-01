<template>
  <div class="nologinContainer">
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="登录后可查看您的收藏~"
    />
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" round to="/login">登录/注册</van-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nologinContainer {
  position: relative;
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .van-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
  }
}
</style>