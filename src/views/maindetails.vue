<template>
  <div id="main-details">
    <!-- 头部nav 滚动条事件会发生变化 -->
    <TopNavBar></TopNavBar>
    <!-- 上部房间轮播图 -->
    <Banner></Banner>
    <!-- <div class="main-infos-container"> -->
    <!-- 下面的信息tabs详情 -->
    <InfoTabs></InfoTabs>
    <!-- 底部 -->
    <DetailsBottom></DetailsBottom>
    <BottomButton></BottomButton>
  </div>
</template>

<script>
import TopNavBar from "@/components/m-details/top-nav-bar.vue";
import Banner from "@/components/m-details/banner-info.vue";
import InfoTabs from "@/components/m-details/detail-info-tabs.vue";
import DetailsBottom from "@/components/m-details/details-bottom.vue";
import BottomButton from "@/components/m-details/bottom-button.vue";
export default {
  data() {
    return {};
  },
  components: {
    TopNavBar,
    Banner,
    InfoTabs,
    DetailsBottom,
    BottomButton,
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#main-details {
  font-family: PingFang SC;
}
</style>