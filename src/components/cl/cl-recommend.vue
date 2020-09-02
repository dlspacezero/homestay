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
        <p class="title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <span class="like"></span>
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <span class="like"></span>
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <span class="like"></span>
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <span class="like"></span>
      </li>
      <li>
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <p class="title">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式三床</p>
        <p class="info">
          <span class="addr">背景朝阳区</span>
          <span class="price">￥558</span>
        </p>
        <span class="like"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
      .title {
        width: 143px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 28px;
        font-size: 15px;
        font-weight: bold;
        color: #333333;
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
        border: 1px solid #ffffff;
      }
    }
  }
}
</style>