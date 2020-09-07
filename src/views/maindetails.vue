<template>
  <div id="main-details">
    <!-- 头部nav 滚动条事件会发生变化 -->
    <TopNavBar></TopNavBar>
    <!-- 上部房间轮播图 -->
    <Banner @mesg="mesg"></Banner>
    <!-- <div class="main-infos-container"> -->
    <!-- 下面的信息tabs详情 -->
    <InfoTabs></InfoTabs>
    <!-- 底部 -->
    <DetailsBottom></DetailsBottom>
    <BottomButton :btnDate="this.date"></BottomButton>
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
    return {
      id: "",
      date: {
        start: "",
        end: "",
        daynum: 1,
      },
    };
  },
  components: {
    TopNavBar,
    Banner,
    InfoTabs,
    DetailsBottom,
    BottomButton,
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  computed: {},
  methods: {
    mesg(val) {
      if (!val) return "";
      let [start, end, daynum] = val;
      this.date.start = start;
      this.date.end = end;
      this.date.daynum = daynum;
      return this.date;
    },
  },
};
</script>

<style lang="scss" scoped>
#main-details {
  font-family: PingFang SC;
}
</style>