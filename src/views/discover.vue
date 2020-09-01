<template>
  <div class="find-wrap">
    <!-- 发现页标题 -->
    <p class="find-title">发现</p>
    <!-- 发现页主要内容 -->
    <doMain />
  </div>
</template>

<script>
import doMain from "../components/do/do-main";
export default {
  components: {
    doMain,
  },
};
</script>
<style lang='scss' >
// 发现页外围
.find-wrap {
  display: flex;
  flex-direction: column;
  // 发现页标题
  .find-title {
    background: white;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 375px;
    height: 44px;
    font-size: 27px;
    font-family: PingFang;
    font-weight: 700;
    line-height: 44px;
    text-indent: 15px;
  }
}
</style>