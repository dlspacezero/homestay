<template>
  <div class="main-wrap">
    <!-- 发现页tab切换 -->
    <ul class="tabswitch">
      <li
        v-for="(item,index) in tabswitch"
        :key="index"
        @click="tabClick(index)"
        :class="{active:index===isActive}"
      >{{item}}</li>
    </ul>
    <!-- 发现页banner轮播 -->
    <van-swipe
      @change="onChange"
      class="my-swipe"
      :loop="false"
      :show-indicators="false"
      ref="changebanner"
    >
      <!-- 推荐 -->
      <van-swipe-item>
        <div class="recommend-wrap">
          <p class="hs-recommend-likes">猜你喜欢</p>
          <ul>
            <li v-for="item in 10" :key="item" @click="toRecommend(1)">
              <div class="hs-recommend-promulator-photo">
                <!-- <img src alt /> -->
              </div>
              <p class="hs-recommend-promulator-title">住进霍格沃兹的魔法城堡！上海木屋民宿！</p>
              <div class="hs-recommend-promulator">
                <div class="hs-recommend-promulator-headshot">
                  <!-- <img src alt /> -->
                </div>
                <span>367</span>
                <span>2</span>
              </div>
            </li>
          </ul>
          <div class="hs-getMore van-hairline--surround">查看更多</div>
        </div>
      </van-swipe-item>
      <!-- 网红民宿 -->
      <van-swipe-item>
        <div class="hot-wrap">
          <ul>
            <li v-for="item in 4" :key="item" @click="toRecommend(1)">
              <div class="hs-hot-photo">
                <div class="hs-hot-photo-big"></div>
                <div class="hs-hot-photo-small-wrap">
                  <div class="hs-hot-photo-small">
                    <img src alt />
                  </div>
                  <div class="hs-hot-photo-small">
                    <img src alt />
                  </div>
                </div>
              </div>
              <p class="hs-hot-promulator-title">住进霍格沃兹的魔法城堡！上海木屋民宿！</p>
              <p class="hs-hot-promulator">昔风里 小木屋</p>
              <div class="hs-hot-likes">
                <div class="hs-hot-likes-headshot">
                  <img src alt />
                </div>
                <span class="hs-hot-likes-num">点赞368</span>
              </div>
            </li>
          </ul>
          <div class="hs-getMore van-hairline--surround">查看更多</div>
        </div>
      </van-swipe-item>
      <!-- 体验分享 -->
      <van-swipe-item>
        <!-- 主体内容部分 -->
        <section class="hs-content">
          <div class="hs-houseInfo" v-for="(item,index) in 6" :key="index" @click="toRecommend(1)">
            <div class="hs-houseImg">
              <img src alt />
              <span class="hf-position">杭州</span>
            </div>
            <div class="hs-houseDescribe">第一次来杭州，住西湖边清新loft</div>
            <div class="hs-houseDiscuss">
              <span class="hs-headImg">
                <img src alt />
              </span>
              <span class="hs-goodNum">144</span>
              <span class="hs-discuss">2</span>
            </div>
          </div>
          <div class="hs-getMore van-hairline--surround">查看更多</div>
        </section>
      </van-swipe-item>
      <!-- 特色房源 -->
      <van-swipe-item>
        <section class="hs-featureHouse">
          <div class="hs-typeHouse"  v-for="(item,index) in 9" :key="index" @click="toSpecial(1)" >
            <div class="hs-typeImg">
              <img src alt />
            </div>
            <span class="hs-typeEn">Villa</span>
            <span class="hs-typeCn">别墅</span>
          </div>
        </section>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabswitch: ["推荐", "网红民宿", "体验分享", "特色房源"],
      isActive: 0,
    };
  },
  methods: {
    // 点击tab滑动下面的轮播
    tabClick(i) {
      this.isActive = i;
      this.$refs.changebanner.swipeTo(i);
    },
    // 滑动下面的轮播上面的tab切换
    onChange(i) {
      this.isActive = i;
    },
    // 进入推荐、网红民宿、体验分享详情页
    toRecommend(id){
      this.$router.push("/detail/recommend/"+id)
    },
    // 进入特色房源详情页
    toSpecial(id){
      this.$router.push("/detail/special/"+id)
    },
  },
};
</script>

<style lang="scss">
.main-wrap {
  // 发现页tab切换
  .tabswitch {
    background: white;
    z-index: 2;
    position: fixed;
    top: 44px;
    left: 0;
    display: flex;
    width: 375px;
    height: 46px;
    border-bottom: 1px solid #e1e1e1;
    li {
      font-size: 15px;
      color: #999999;
      font-weight: PingFang-SC-Medium;
      height: 43px;
      line-height: 46px;
      margin: 0 16px 0 16px;
    }
    .active {
      color: #ff9180;
      border-bottom: 3px solid;
    }
  }
  // 发现页轮播图
  .my-swipe {
    position: absolute;
    top: 91px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow-y: auto;
    .van-swipe-item .recommend-wrap {
      display: flex;
      flex-direction: column;
      padding: 0 15px;
      .hs-recommend-likes {
        margin: 4px 0 0 0;
        width: 100%;
        font-size: 18px;
        font-family: PingFang;
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
        color: #ff9180;
        margin-bottom: 43px;
        font-size: 15px;
        font-weight: bold;
      }
      .van-hairline--surround::after {
        border-color: #ff9180;
      }
    }
    .van-swipe-item .hot-wrap {
      display: flex;
      flex-direction: column;
      padding: 0 15px;
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
            }
            .hs-hot-likes-num {
              color: #333333;
              font-size: 11px;
              font-family: PingFang-SC-Bold;
              font-weight: SC-Bold;
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
        color: #ff9180;
        margin-bottom: 43px;
        font-size: 15px;
        font-weight: bold;
      }
      .van-hairline--surround::after {
        border-color: #ff9180;
      }
    }
    .van-swipe-item {
      .hs-content {
        padding: 26px 15px 0px 15px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .hs-houseInfo {
          display: flex;
          flex-direction: column;
          font-family: PingFang;
          margin-bottom: 38.33px;
          .hs-houseImg {
            width: 157px;
            height: 149px;
            border-radius: 6px;
            background: crimson;
            position: relative;
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
            span {
              display: inline-block;
            }
            .hs-headImg {
              width: 28px;
              height: 28px;
              border-radius: 50%;
              background: chocolate;
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
          color: #ff9180;
          margin-bottom: 43px;
          font-size: 15px;
          font-weight: bold;
        }
        .van-hairline--surround::after {
          border-color: #ff9180;
        }
      }
      .hs-featureHouse {
        padding: 26px 15px 0px 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .hs-typeHouse {
          display: flex;
          flex-direction: column;
          color: #333;
          font-family: PingFang;
          margin-bottom: 32px;
          .hs-typeImg {
            width: 103px;
            height: 116px;
            border-radius: 6px;
            background: coral;
            margin-bottom: 19px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .hs-typeEn {
            margin-left: 6px;
            font-size: 11px;
            font-weight: 500;
            margin-bottom: 7px;
          }
          .hs-typeCn {
            margin-left: 6px;
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>