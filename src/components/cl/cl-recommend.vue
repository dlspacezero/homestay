<template>
  <div class="recommendContainer">
    <van-nav-bar fixed placeholder left-text="X" @click-left="onClickLeft" />
    <h4>"他们"收藏的美馆</h4>
    <div class="listContainer" ref="listContainer">
      <ul>
        <li @click="toDetail(id)">
          <img
            src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
            alt="pic"
          />
          <p class="re-li-title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
          <p class="info">
            <span class="addr">背景朝阳区</span>
            <span class="price">￥558</span>
          </p>
          <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click.stop="Like(like)" />
          <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click.stop="unLike(like)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import likeimg from "@/assets/imgs/icon_sc.png";
import unlikeimg from "@/assets/imgs/icon_sc2.png";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      id: "",
      like: 0,
      unlikeimg: unlikeimg,
      likeimg: likeimg,
    };
  },
  mounted() {
    this.betterScroll();
  },
  methods: {
    // 回退到收藏页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 点击进入详情页
    toDetail(id) {
      this.$router.push("detail/house/" + id);
    },
    Like(like) {
      this.$toast({
        message: "收藏成功！",
        position: "bottom",
        className: "cl-detail-toast",
        getContainer: ".recommendContainer",
      });
      this.like = 1;
    },
    unLike(like) {
      this.like = 0;
      this.$toast({
        message: "取消收藏成功！",
        position: "bottom",
        className: "cl-detail-toast",
        getContainer: ".recommendContainer",
      });
    },
    // 上拉加载
    betterScroll() {
      this.$nextTick(() => {
        const bscroll = new BScroll(this.$refs.listContainer, {
          pullUpLoad: true,
          click: true,
          scrollY: true,
          // eventPassthrough: "horizontal",
        });
        // 上拉加载，监听pullingUp方法
        bscroll.on("pullingUp", () => {
          // 请求数据
          // if (this.currentIndex < this.movieIds.length) {
          // this.getMore({ movieIds: this.dataIds });
          // }
          // 告诉bscroll已经加载完了，可以下一次加载了
          bscroll.finishPullUp();
        });
      });
    },
  },
};
</script>

<style lang="scss">
.recommendContainer {
  h4 {
    // padding-top: 1px;
    margin-top: 5px;
    height: 24px;
    line-height: 24px;
    font-size: 20px;
    font-weight: 600;
    text-indent: 8px;
  }
  .van-nav-bar__text {
    color: #333;
    font-size: 18px;
  }
  .listContainer {
    height: calc(100vh - 75px);
    overflow: hidden;
    padding: 0;
  }
  ul {
    box-sizing: border-box;
    width: 375px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      float: left;
      width: 166px;
      height: 168px;
      // margin-right: 13px;
      position: relative;
      list-style: none;
      &:nth-child(2n) {
        margin-left: 13px;
      }
      img {
        width: 100%;
        height: 100px;
        border-radius: 9px;
      }
      .re-li-title {
        width: 143px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 28px;
        font-size: 15px;
        font-weight: bold;
        color: #333333;
        margin: 0px;
        height: 30px;
      }
      .info {
        width: 100%;
        height: 17px;
        font-size: 12px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        .addr {
          color: #999999;
        }
        .price {
          color: #ff917f;
        }
      }
      .like {
        position: absolute;
        top: 8px;
        right: 6px;
        width: 18px;
        height: 17px;
        background: transparent;
      }
    }
  }
  // 提示信息样式
  .van-toast {
    background-color: rgba(125, 125, 125, 0.4);
  }
}
</style>