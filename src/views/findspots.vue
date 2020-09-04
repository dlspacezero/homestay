<template>
  <div class="hs-spotsContainer">
    <!-- 顶部搜索 -->
    <van-nav-bar left-arrow>
        <template #title>
            <van-search v-model="value" placeholder="搜索北京的景点/地标/房源编号" shape="round"/>
        </template>
    </van-nav-bar>
    <!-- 定位 -->
    <van-cell is-link>
      <template #title>
        <span class="hs-city">
           <img src="../assets/imgs/nav_icon.png" alt="">
        </span>
        <span class="custom-title">北京市</span>
        <span class="hs-target">目的地</span>
        <span class="hs-housenum">59100+房源</span>
      </template>
    </van-cell>
    <!-- 热门景点 -->
    <section class="hs-hotspots van-hairline--top">
      <section class="hs-spotContent">
        <p class="hs-spotsTitle">
          <span class="hs-line">
            <img src="../assets/imgs/spoticon.png" alt="">
          </span>
          <span class="hs-hot">热门景点</span>
          <span class="hs-img">HOT</span>
        </p>
        <article class="hs-spotsName">
          <span class="hs-hotmodel">
            <span class="hs-contentmodel">
              <span class="hs-hotLogo">
                <img src="../assets/imgs/re_icon.png" alt="">
              </span>
              <span class="hs-hotName">雾灵山国家森林公园</span>
            </span>
          </span>
          <span class="hs-hotmodel">
            <span class="hs-contentmodel">
              <span class="hs-hotLogo">
                <img src="../assets/imgs/re_icon.png" alt="">
              </span>
              <span class="hs-hotName">小海坨山</span>
            </span>
          </span>
          <span class="hs-hotmodel">
            <span class="hs-contentmodel">
              <span class="hs-hotLogo">
                <img src="../assets/imgs/re_icon.png" alt="">
              </span>
              <span class="hs-hotName">八达岭</span>
            </span>
          </span>
          <span class="hs-commonSpots">百里山水画廊</span>
          <span class="hs-commonSpots">雁西湖</span>
          <span class="hs-commonSpots">金海湖旅游度假风景区</span>
          <span class="hs-commonSpots">四合院</span>
          <span class="hs-commonSpots">故宫</span>
        </article>
      </section>
    </section>
    <!-- 热门地标 -->
    <section class="hs-hotlocation hs-hotspots van-hairline--top">
      <section class="hs-spotContent">
          <p class="hs-spotsTitle">
            <span class="hs-line">
              <img src="../assets/imgs/spoticon.png" alt="">
            </span>
            <span class="hs-hot">热门地标</span>
            <span class="hs-img hs-logo">
                <img src="../assets/imgs/huo_icon.png" alt="">
            </span>
          </p>
          <article class="hs-spotsName">
            <span class="hs-hotmodel">
              <span class="hs-contentmodel">
                <span class="hs-hotLogo">
                  <img src="../assets/imgs/re_icon.png" alt="">
                </span>
                <span class="hs-hotName">中关村</span>
              </span>
            </span>
            <span class="hs-hotmodel">
              <span class="hs-contentmodel">
                <span class="hs-hotLogo">
                  <img src="../assets/imgs/re_icon.png" alt="">
                </span>
                <span class="hs-hotName">崇文门（地铁站）</span>
              </span>
            </span>
            <span class="hs-hotmodel">
              <span class="hs-contentmodel">
                <span class="hs-hotLogo">
                  <img src="../assets/imgs/re_icon.png" alt="">
                </span>
                <span class="hs-hotName">新世界百货（崇文门）</span>
              </span>
            </span>
            <span class="hs-commonSpots">三里屯太古里</span>
            <span class="hs-commonSpots">前门</span>
            <span class="hs-commonSpots">中国医学科学院肿瘤医院</span>
            <span class="hs-commonSpots">王府井步行街</span>
            <span class="hs-commonSpots">国贸</span>
          </article>
        </section>
    </section>
    <!-- 猜你喜欢 -->
    <section class="hs-hotlocation hs-hotspots van-hairline--top">
      <section class="hs-spotContent">
          <p class="hs-spotsTitle">
            <span class="hs-line">
              <img src="../assets/imgs/spoticon.png" alt="">
            </span>
            <span class="hs-hot">猜你喜欢·北京房源</span>
          </p>
          <article class="hs-spotsName">
            <span class="hs-commonSpots">小区住宅</span>
            <span class="hs-commonSpots">客栈民宿</span>
            <span class="hs-commonSpots">普通公寓</span>
            <span class="hs-commonSpots">独栋别墅</span>
            <span class="hs-commonSpots">四合院</span>
            <span class="hs-commonSpots">农家乐</span>
          </article>
        </section>
    </section>
    <!-- 房源信息 -->
    <section class="hs-infoCotainer van-hairline--top van-hairline--bottom" v-for="item in 6" :key="item">
      <section class="hs-houseinfo">
        <p class="hs-info">【日落】，高层，海洋球滑梯，影院【琪】长阳地铁</p>
        <p class="hs-position">
          <span class="hs-position">北京｜房山区｜</span>
          <span class="hs-price">网红民宿<span class="hs-position">｜</span>¥466</span>
        </p>
      </section>
    </section>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      value:''
    };
  }
};
</script>
<style lang='scss'>
@import '../assets/style/command.scss';
    //搜索景点整体结构样式
    .hs-spotsContainer {
      display: flex;
      flex-direction: column;
      //设置顶部样式
      .van-nav-bar {
        height: 41px;
        .van-icon {
          color: #545454;
        }
        .van-nav-bar__left {
          padding-left: 14px;
          padding-right: 0;
        }
        .van-nav-bar__title {
          overflow: initial;
          margin: 0px;
          margin-left: 34px;
          .van-search {
            padding-left: 0;
            padding-right: 0;
            width: 314px;
            height: 37px;
            .van-cell{
              padding: 0;
              height: 27px;
              display: flex;
              align-items: center;
            }
            .van-field__control{
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #8C8C8C;
            }
          }
        }
      }
      //设置定位栏样式
      .van-cell {
        height: 56px;
        padding: 13px 13px 13px 15px ;
        &::after {
          border: none;
        }
        .van-cell__title {
          display: flex;
          align-items: center;
          .hs-city {
            display: inline-block;
            width: 31px;
            height: 29px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .custom-title {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #202020;
          }
          .hs-target {
            margin-left: 7px;
            font-size: 10px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #9B9B9B;
          }
          .hs-housenum {
            margin-left: 140px;
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #EA9884;
          }
        }
        .van-icon-arrow::before {
            font-size: 5px;
            color: #EA9884;
            vertical-align: middle;
        }
      }
      //热门景点、热门地标、猜你喜欢样式
      .hs-hotspots {
        width: 100%;
        display: flex;
        flex-direction: column;
        .hs-spotContent {
          margin: 17px 0px 0px 18px;
          .hs-spotsTitle{
            margin-bottom: 19px;
            span {
              display: inline-block;
            }
            //竖线图标样式
            .hs-line {
              width: 14px;
              height: 22px;
              vertical-align: middle;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .hs-hot {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #202020;
            }
            .hs-img {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 600;
              font-style: italic;
              color: #ED7148;
              margin-left: 8px;
            }
            .hs-logo{
              width: 10px;
              height: 13px;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
          .hs-spotsName{
            span{
              display: inline-block;
            }
            //带有图标的景点样式
            .hs-hotmodel{
              width: auto;
              background: #FDF3F1;
              border-radius: 12px;
              color: #EC7B65;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              margin-right: 6px;
              margin-bottom: 15px;
              .hs-contentmodel{
                margin: 5px 15px 5px 12px;
                .hs-hotLogo {
                  width: 11px;
                  height: 12px;
                  margin-right: 2px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
            //没有图标的普通景点样式
            .hs-commonSpots{
              padding: 6px 12px 6px 11px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #000;             
              background: #F5F5F5;
              border-radius: 12px;
              margin-right: 11px;
              margin-bottom: 15px;
            }
          }
        }
      }
      //房源信息样式
      .hs-infoCotainer{
        width: 100%;
        //房源信息
        .hs-houseinfo {
          width: 300px;
          height: 71px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 17px;
          //房源描述信息样式
          .hs-info {
            width: 300px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #000;
            margin-bottom: 14px;
            @include singleomit;
          }
          //房源价格、类型样式
          .hs-price{
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            color:#EC7A64;
          }
          //房源地区位置样式
          .hs-position {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #000;
          }
        }
      }
    }
</style>
