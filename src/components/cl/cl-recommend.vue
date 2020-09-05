<template>
  <div class="recommendContainer">
    <van-nav-bar fixed placeholder left-text="X" @click-left="onClickLeft" />
    <h4>"他们"收藏的美馆</h4>
    <ul>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="re-li-title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click="unLike(like)" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="re-li-title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click="unLike(like)" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="re-li-title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click="unLike(like)" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="re-li-title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click="unLike(like)" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="re-li-title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click="unLike(like)" />
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
      like: 0,
      unlikeimg: unlikeimg,
      likeimg: likeimg,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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