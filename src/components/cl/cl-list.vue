<template>
  <div class="listContainer">
    <div class="list">
      <div class="li" @click="toDetail(id)">
        <img
          src="https://assets.muniao.com/imagefile/image/20180707/ab4cb75737364959baf521e09dc55df720180707232012238.jpg?width=580&height=368&mode=stretch&format=jpg"
          alt="pic"
        />
        <div class="infoWrap">
          <img
            src="https://assets.muniao.com//UploadFiles/thumb/image/20180704/af1d3554888645a3ad697060de12e10c20180704163329873.jpg_150_150.jpg"
            alt="photo"
            class="owner"
          />
          <div class="praise">
            <span>👍</span>
            <span>5.0</span>
            <span style="color:#FD8735">"超赞"</span>
            <span>1条评价</span>
          </div>
          <div class="list-li-title">
            <span class="cyber">网红民宿</span>
            <span class="h2">卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式</span>
          </div>
          <div class="specification">
            <span>整租-1居室-宜住6人</span>
            <span class="add">北京房山区</span>
          </div>
          <div class="ableDo">
            <span>可做饭</span>
          </div>
          <div class="price">
            <span class="unit">￥</span>
            <span class="num">338</span>
            <span class="evn">/晚</span>
          </div>
        </div>
        <img :src="unlikeimg" alt="pic" class="like" v-if="like===0" @click.stop="Like(like)" />
        <img :src="likeimg" alt="pic" class="like" v-if="like===1" @click.stop="unLike(like)" />
      </div>
    </div>
  </div>
</template>

<script>
import likeimg from "@/assets/imgs/icon_sc.png";
import unlikeimg from "@/assets/imgs/icon_sc2.png";
export default {
  data() {
    return {
      id: 1,
      like: 0,
      houseArr: [],
      unlikeimg: unlikeimg,
      likeimg: likeimg,
    };
  },
  mounted() {},
  methods: {
    toDetail(id) {
      this.$router.push("detail/house/" + id);
    },
    Like(like) {
      this.$toast({
        message: "收藏成功！",
        position: "bottom",
        className: "cl-detail-toast",
        getContainer: ".listContainer",
      });
      this.like = 1;
    },
    unLike(like) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "是否取消收藏？",
          confirmButtonText: "是",
          confirmButtonColor: "#ff917f",
          cancelButtonText: "否",
          overlayStyle: { backgroundColor: "rgba(125, 125, 125, 0.4)" },
          getContainer: ".listContainer",
        })
        .then((like) => {
          this.like = 0;
          this.$toast({
            message: "取消收藏成功！",
            position: "bottom",
            className: "cl-detail-toast",
            getContainer: ".listContainer",
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" >
.listContainer {
  padding-top: 46px;
  .cl-list-toast {
    background-color: rgba(125, 125, 125, 0.4);
  }
  .list {
    width: 345px;
    margin: 8px auto 8px;
    color: #333333;
    touch-action: none;
    .li {
      box-sizing: border-box;
      width: 345px;
      height: 378px;
      background: #ffffff;
      padding: 8px 7px 0px;
      border-radius: 9px;
      margin: 8px 0 16px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      img {
        display: block;
        width: 330px;
        height: 207px;
        background: #c8c4c4;
        border-radius: 9px;
      }
      .infoWrap {
        margin: 0 8px;
        position: relative;
        .owner {
          width: 47px;
          height: 47px;
          background: #000000;
          border: 2px solid #ffffff;
          border-radius: 50%;
          position: absolute;
          top: -15px;
          right: 0px;
        }
        .praise {
          margin: -13px 0 10px 0;
          width: 130px;
          height: 30px;
          background: #ffffff;
          box-shadow: 0px 2px 8px 0px rgba(104, 102, 102, 0.13);
          border-radius: 15px;
          line-height: 30px;
          font-size: 11px;
          font-weight: bold;
          color: #999999;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .list-li-title {
          height: 31px;
          display: flex;
          align-items: center;
          .cyber {
            width: 49px;
            height: 16px;
            line-height: 16px;
            background: linear-gradient(89deg, #a33def 0%, #1383fd 100%);
            border-radius: 2px;
            text-align: center;
            font-size: 11px;
            font-weight: bold;
            color: #f7f7f7;
          }
          .h2 {
            width: 210px;
            height: 31px;
            margin-left: 13px;
            line-height: 31px;
            font-size: 15px;
            font-weight: bold;
            color: #333333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .specification {
          height: 24px;
          line-height: 24px;
          font-size: 11px;
          font-weight: 500;
          color: #656565;
          span {
            margin-right: 11px;
          }
        }
        .ableDo {
          height: 17px;
          padding-bottom: 10px;
          display: flex;
          border-bottom: 1px solid #e1e1e1;
          span {
            height: 17px;
            margin-right: 4px;
            border: 1px solid #e1e1e1;
            border-radius: 2px;
            line-height: 17px;
            font-size: 11px;
            font-weight: 500;
            color: #656565;
          }
        }
        .price {
          height: 48px;
          line-height: 48px;
          span.unit {
            font-size: 18px;
            font-weight: bold;
          }
          span.num {
            font-size: 23px;
            font-weight: bold;
          }
          span.evn {
            font-size: 12px;
            font-weight: 500;
          }
        }
      }
      .like {
        position: absolute;
        top: 24px;
        right: 26px;
        width: 19px;
        height: 17px;
        background: transparent;
      }
    }
  }
}
// 提示信息样式
.van-toast {
  background-color: rgba(125, 125, 125, 0.4);
}
</style>