<template>
  <!-- 发现-推荐页 -->
  <div class="recommend-wrap">
    <p class="hs-recommend-likes">猜你喜欢</p>
    <ul>
      <li v-for="(item,index) in discoverlist" :key="index" @click="toRecommend(1)">
        <div class="hs-recommend-promulator-photo">
          <img :src="item.houseImg" alt />
        </div>
        <p class="hs-recommend-promulator-title">{{item.articletitle}}</p>
        <div class="hs-recommend-promulator">
          <div class="hs-recommend-promulator-headshot">
            <img :src="item.authorVia" alt />
          </div>
          <span class="iconfont icon-dianzan">{{item.authorlike}}</span>
          <span class="iconfont icon-pinglun">{{item.authorRemark}}</span>
        </div>
      </li>
    </ul>
    <div class="hs-getMore van-hairline--surround">查看更多</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discoverlist: [],
    };
  },
  async mounted() {
    // 发现页-推荐数据
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
.recommend-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  .hs-recommend-likes {
    margin: 4px 0 0 0;
    width: 100%;
    font-size: 18px;
    @include pingfang;
    font-weight: Bold;
    color: #333333;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 164px;
      margin: 15px 0;
      .hs-recommend-promulator-photo {
        width: 164px;
        height: 117px;
        background: skyblue;
        border-radius: 10px;
        overflow: hidden;
      }
      .hs-recommend-promulator-title {
        width: 164px;
        font-size: 14px;
        color: #656565;
        margin: 16px 0 14px 0;
      }
      .hs-recommend-promulator {
        display: flex;
        align-items: center;
        color: #333333;
        font-size: 11px;
        .hs-recommend-promulator-headshot {
          width: 20px;
          height: 20px;
          background: red;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
  .hs-getMore {
    margin-top: 28px;
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