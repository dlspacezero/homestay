<template>
  <div class="clMoreContainer">
    <div class="top">
      <span class="top-title">看看他们都收藏了什么</span>
      <span class="btn" @click="toRecommend">点击查看更多&gt;</span>
    </div>
    <ul class="morelist">
      <li @click="toDetail(id)">
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="li-title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click.stop="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click.stop="unLike(like)" />
      </li>
    </ul>
  </div>
</template>

<script>
import likeimg from "@/assets/imgs/icon_sc.png";
import unlikeimg from "@/assets/imgs/icon_sc2.png";
export default {
  data() {
    return {
      id: "",
      like: 0,
      unlikeimg: unlikeimg,
      likeimg: likeimg,
    };
  },
  methods: {
    // 进入更多推荐收藏列表页
    toRecommend() {
      this.$router.push("/cl-recommend");
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
        getContainer: ".clMoreContainer",
      });
      this.like = 1;
    },
    unLike(like) {
      this.like = 0;
      this.$toast({
        message: "取消收藏成功！",
        position: "bottom",
        className: "cl-detail-toast",
        getContainer: ".clMoreContainer",
      });
    },
  },
};
</script>

<style lang="scss">
.clMoreContainer {
  height: 201px;
  background: #ffffff;
  margin-top: 9px;
  padding: 4px 0 4px 14px;
  .top {
    height: 46px;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    .top-title {
      font-size: 15px;
      line-height: 46px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #656565;
      margin: 0px;
    }
    .btn {
      line-height: 46px;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #999999;
    }
  }
  ul {
    height: 145px;
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      width: 146px;
      height: 145px;
      margin-right: 13px;
      position: relative;
      list-style: none;
      img {
        width: 100%;
        height: 83px;
        border-radius: 9px;
      }
      .li-title {
        width: 133px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 28px;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
      }
      .info {
        width: 100%;
        height: 17px;
        font-size: 12px;
        font-family: PingFang SC;
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
}
.morelist {
  li {
    .title {
      margin: 0px;
      height: 30px;
    }
  }
}
// 提示信息样式
.van-toast {
  background-color: rgba(125, 125, 125, 0.4);
}
</style>