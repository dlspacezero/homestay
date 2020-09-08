<template>
  <!-- 发现-网红民宿页 -->
  <div class="hot-wrap">
    <div>
      <ul>
      <li v-for="(item,index) in discoverlist" :key="index" @click="toRecommend(1)">
        <div class="hs-hot-photo">
          <div class="hs-hot-photo-big">
            <img :src="item.houseImg" alt />
          </div>
          <div class="hs-hot-photo-small-wrap">
            <div class="hs-hot-photo-small">
               <img :src="item.houseImg" alt />
            </div>
            <div class="hs-hot-photo-small">
              <img :src="item.houseImg" alt />
            </div>
          </div>
        </div>
        <p class="hs-hot-promulator-title">{{item.articletitle}}</p>
        <p class="hs-hot-promulator">昔风里 小木屋</p>
        <div class="hs-hot-likes">
          <div>
            <div class="hs-hot-likes-headshot">
               <img :src="item.authorVia" alt />
            </div>
            <div class="hs-hot-likes-headshot headshot1">
               <img :src="item.authorVia" alt />
            </div>
            <div class="hs-hot-likes-headshot headshot2">
              <img :src="item.authorVia" alt />
            </div>
          </div>
          <span class="iconfont icon-dianzan">
            <span class="hs-hot-likes-num">{{item.authorlike}}</span>
          </span>
        </div>
      </li>
    </ul>
    <div class="hs-getMore van-hairline--surround">查看更多</div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data() {
    return {
      discoverlist: [],
    };
  },
  async mounted() {
    // 发现页-网红民宿数据
    await this.$store.dispatch("changeDiscoverList");
    this.discoverlist = this.$store.state.discoverlist;
    this.$nextTick(()=>{
      let bscroll = new BScroll('.hot-wrap',{
        click:true,       //滚动部分允许点击
        pullUpLoad:true  //允许上拉加载
      })
      //上拉加载，监听pullingUp方法
      bscroll.on('pullingUp',()=>{
          // this.getMore('movieIds',this.currentId);
          // this.getMore({
          //   movieIds:this.currentId
          // })
          bscroll.finishPullUp();   //告诉bscoll已经加载完了，可以下一次加载了
      })
    })
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
.hot-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ul {
    width: 100%;
    li {
      width: 100%;
      margin-top: 26px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e1e1e1;
      &:last-child {
        border: none;
      }
      .hs-hot-photo {
        display: flex;
        justify-content: space-between;
        .hs-hot-photo-big {
          width: 208px;
          height: 197px;
          background: skyblue;
          border-radius: 10px;
          overflow: hidden;
        }
        .hs-hot-photo-small-wrap {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .hs-hot-photo-small {
            width: 129px;
            height: 94px;
            background: skyblue;
            border-radius: 10px;
            overflow: hidden;
          }
        }
      }
      .hs-hot-promulator-title {
        margin: 15px 0 0 0;
        color: #656565;
        font-size: 14px;
      }
      .hs-hot-promulator {
        margin: 0;
        color: #656565;
        font-size: 14px;
      }
      .hs-hot-likes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 28px 0;
        .hs-hot-likes-headshot {
          width: 28px;
          height: 28px;
          background: red;
          border-radius: 50%;
          overflow: hidden;
          float: left;
        }
        .headshot1 {
          position: relative;
          left: -10px;
          z-index: -1;
        }
        .headshot2 {
          position: relative;
          left: -20px;
          z-index: -2;
        }
        .hs-hot-likes-num {
          color: #333333;
          font-size: 11px;
          @include pingfang;
          font-weight: bold;
        }
        .iconfont {
          color: #fe8e47;
        }
      }
    }
  }
  .hs-getMore {
    margin-top: 12px;
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