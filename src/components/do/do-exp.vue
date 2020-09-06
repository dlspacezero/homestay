<template>
  <!-- 发现-体验分享页 -->
  <section class="hs-content">
    <div
      class="hs-houseInfo"
      v-for="(item,index) in discoverlist"
      :key="index"
      @click="toRecommend(1)"
    >
      <div class="hs-houseImg">
        <img :src="item.houseImg" alt />
        <span class="hf-position">杭州</span>
      </div>
      <div class="hs-houseDescribe">{{item.articletitle}}</div>
      <div class="hs-houseDiscuss">
        <span class="hs-headImg">
          <img :src="item.authorVia" alt />
        </span>
        <span class="iconfont icon-dianzan hs-goodNum">{{item.authorlike}}</span>
        <span class="iconfont icon-pinglun hs-discuss">{{item.authorRemark}}</span>
      </div>
    </div>
    <div class="hs-getMore van-hairline--surround">查看更多</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      discoverlist: [],
    };
  },
  async mounted() {
    // 发现页-体验分享数据
    await this.$store.dispatch("changeDiscoverList");
    this.discoverlist = this.$store.state.discoverlist;
  },
  methods: {
    // 进入推荐、网红民宿、体验分享详情页
    toRecommend(id) {
      this.$router.push("/detail/recommend/" + id);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/style/command.scss";
.hs-content {
  padding: 26px 15px 0px 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .hs-houseInfo {
    display: flex;
    flex-direction: column;
    @include pingfang;
    margin-bottom: 38.33px;
    .hs-houseImg {
      width: 157px;
      height: 149px;
      border-radius: 10px;
      background: crimson;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .hf-position {
        display: inline-block;
        width: 38px;
        height: 20px;
        background: #ffffff;
        border-radius: 3px;
        position: absolute;
        left: 4px;
        bottom: 4px;
        line-height: 20px;
        text-align: center;
        color: #666;
        font-weight: 500;
        font-size: 11px;
      }
    }
    .hs-houseDescribe {
      width: 153px;
      color: #333;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 12px;
      font-weight: 500;
    }
    .hs-houseDiscuss {
      height: 28px;
      width: 153px;
      line-height: 28px;
      color: #333;
      font-size: 11px;
      font-weight: 500;
      display: flex;
      span {
        display: inline-block;
      }
      .hs-headImg {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: chocolate;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .hs-getMore {
    width: 345px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color: $themecolor;
    margin-bottom: 43px;
    font-size: 15px;
    font-weight: bold;
  }
  .van-hairline--surround::after {
    border-color: $themecolor;
  }
}
</style>