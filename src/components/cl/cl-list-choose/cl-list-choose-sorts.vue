<template>
  <div class="clChooseCityContainer">
    <van-nav-bar title="排序" fixed placeholder left-text="X" @click-left="onClickLeft" />
    <!-- class="van-hairline--bottom" -->
    <p v-for="(item,index) in sortArr" :key="index" @click="choose(index)">
      <span class="sortName">{{item.sortName}}</span>
      <span class="chooseicon" v-if="show===index">√</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: "",
      show: null,
      sortArr: [
        { sortName: "默认排序", param: "" },
        { sortName: "时间从早到晚", param: "" },
        { sortName: "价格由高到低", param: "" },
        { sortName: "价格由低到高", param: "" },
        { sortName: "最受欢迎", param: "" },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    choose(index) {
      this.show = null;
      this.sort = this.sortArr[index].sortName;
      this.show = index;
      this.$store.commit("getClChooseSort", {
        sort: this.sort,
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