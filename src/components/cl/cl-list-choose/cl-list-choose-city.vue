<template>
  <div class="clChooseCityContainer">
    <van-nav-bar title="城市" fixed placeholder left-text="X" @click-left="onClickLeft" />
    <!-- class="van-hairline--bottom" -->
    <p v-for="(item,index) in cityArr" :key="index" @click="choose(index)">
      <span class="cityName">{{item}}</span>
      <span class="chooseicon" v-if="show===index">√</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      show: null,
      cityArr: ["全部城市", "北京", "杭州"],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    choose(index) {
      this.show = null;
      this.city = this.cityArr[index];
      this.show = index;
      this.$store.commit("getClChooseCity", {
        city: this.city,
      });
      this.$router.replace("/collect");
    },
  },
};
</script>

<style lang="scss">
.clChooseCityContainer {
  font-family: PingFang SC;
  .van-nav-bar__text {
    color: #333;
    font-size: 18px;
  }
  p {
    height: 30px;
    border-bottom: 1px solid #f1f1f1;
    line-height: 30px;
    font-size: 12px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    .chooseicon {
      color: #fe9180;
    }
  }
}
</style>