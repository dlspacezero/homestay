<template>
  <div class="detail-info-tabs-container">
    <van-tabs v-model="active" scrollspy sticky offset-top="49">
      <!-- <van-tab v-for="(item,index) in tabArr" :title="item" :key="index">{{index}}</van-tab> -->
      <van-tab title="位置">
        <Address></Address>
      </van-tab>
      <van-tab title="详情">
        <Details></Details>
      </van-tab>
      <van-tab title="须知">
        <Notice></Notice>
      </van-tab>
      <van-tab title="推荐">
        <Recommend></Recommend>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Address from "@/components/m-details/address.vue";
import Details from "@/components/m-details/details.vue";
import Notice from "@/components/m-details/notice.vue";
import Recommend from "@/components/m-details/recommend.vue";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    Address,
    Details,
    Notice,
    Recommend,
  },
};
</script>

<style lang="scss" scoped>
.detail-info-tabs-container {
  ::v-deep .van-tabs--line .van-tabs__wrap {
    height: 36px;
    margin: 0px auto 20px;
  }
  ::v-deep .van-tabs__nav--line {
    padding-bottom: 0;
  }
  ::v-deep .van-tab {
    margin: 0 15px;
    flex: 0 1 auto;
    font-size: 15px;
    font-weight: bold;
    color: #999999;
  }
  ::v-deep .van-tab--active {
    color: #333333;
  }
  ::v-deep .van-tabs__line {
    width: 22px;
    height: 2px;
    bottom: 0;
    background: #ed7b65;
    border-radius: 1px;
  }
  ::v-deep .van-tab__pane {
    height: auto;
    margin-bottom: 13px;
  }
  //   内容区
  ::v-deep .van-tabs__content {
    padding: 0 17px 0 15px;
    overflow: hidden;
  }
}
</style>