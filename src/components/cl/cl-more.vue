<template>
  <div class="clMoreContainer">
    <div class="top">
      <span class="title" :style="{margin:'0px'}">看看他们都收藏了什么</span>
      <span class="btn" @click="toRecommend" :style="{width:'95px'}">点击查看更多&gt;</span>
    </div>
    <ul class="morelist">
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title" :style="{margin:'0px',height:'30px'}">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title" :style="{margin:'0px',height:'30px'}">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title" :style="{margin:'0px',height:'30px'}">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title" :style="{margin:'0px',height:'30px'}">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" />
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title" :style="{margin:'0px',height:'30px'}">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" />
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
    toRecommend() {
      this.$router.push("/cl-recommend");
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
    .title {
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
      .title {
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
      }
    }
  }
}
.morelist{
  li{
    .title{
      margin:0px;
      height: 30px;
    }
  }
}
</style>