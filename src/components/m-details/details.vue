<template>
  <div class="details-container">
    <!-- 
      房东介绍
    -->
    <div class="house-owner">
      <div class="top-p">
        <span class="left">房东介绍</span>
        <span class="right">房东主页&gt;</span>
      </div>
      <!-- ------ -->
      <div class="ownerInfo">
        <img
          src="https://assets.muniao.com//UploadFiles/thumb/image/20171207/1605640bc4634858989488727b97b05a20171207224628829.jpg_150_150.jpg"
          alt="pic"
        />
        <div class="pwrap">
          <div class="blod">后海赛洛城</div>
          <!-- ------- -->
          <div class="spanwrap">
            <van-tag
              round
              color="#E6F2EC"
              text-color="#67AB78"
              size="width: 49px;height: 15px;"
            >实名认证</van-tag>
            <van-tag
              round
              color="#E6F2EC"
              text-color="#67AB78"
              size="width: 49px;height: 15px;"
            >营业认证</van-tag>
            <van-tag
              round
              color="#FBF3EB"
              text-color="#DF8247"
              size="width: 49px;height: 15px;"
            >个人房东</van-tag>
            <van-tag
              round
              color="#FDF4E2"
              text-color="#F3BA58"
              size="width: 49px;height: 15px;"
            >地主之谊</van-tag>
          </div>
          <!-- ------- -->
          <div class="light">
            <div class="item">
              <div class="top">
                63
                <span>%</span>
              </div>
              <div class="bottom">回复率</div>
            </div>
            <div class="item">
              <div class="top">
                20
                <span>分钟以内</span>
              </div>
              <div class="bottom">平均回复时长</div>
            </div>
            <div class="item">
              <div class="top">
                2
                <span></span>
              </div>
              <div class="bottom">房源数</div>
            </div>
          </div>
        </div>
      </div>
      <!-- ---- -->
      <img :src="sc_line" alt="pic" class="splitLine" />
      <!-- ------ -->
      <p class="msg">
        <span style="font-weight: bold;color: #333333;">房源信息</span>&emsp;公寓坐落与百子湾沿海赛洛城，很多在CBD工作的白领都在次生活，社区设施齐全、交通便利，周边有大型商超等
      </p>
      <div class="littlespan">详情</div>
    </div>
    <!-- 
      房客评价
    -->
    <div class="evaluate">
      <!-- ----- -->
      <div class="top-p">
        <span class="left">房客评价</span>
        <span class="right">查看全部&gt;</span>
      </div>
      <!-- ---- -->
      <div class="topstars">
        <div class="blod">3.9</div>
        <div class="starswrap">
          <img :src="sc_icon6" alt="star" />
          <img :src="sc_icon6" alt="star" />
          <img :src="sc_icon6" alt="star" />
          <img :src="sc_icon6" alt="star" />
          <img :src="sc_icon6" alt="star" />
        </div>
        <div class="pright">
          <span class="top">7条点评</span>
          <span class="bottom">有图2条</span>
        </div>
      </div>
      <!-- ---- -->
      <div class="blodwrap">
        <div>
          <span>3.9</span>
          <span>装修设施</span>
        </div>
        <div>
          <span>3.7</span>
          <span>环境卫生</span>
        </div>
        <div>
          <span>4.1</span>
          <span>服务态度</span>
        </div>
        <div>
          <span>3.7</span>
          <span>图片真实</span>
        </div>
      </div>
      <!-- ---- -->
      <img :src="sc_line" alt="pic" class="splitLine" />
      <!-- ------ -->
      <ul>
        <li>
          <img
            src="https://assets.muniao.com//UploadFiles/thumb/image/20171207/1605640bc4634858989488727b97b05a20171207224628829.jpg_150_150.jpg"
            alt="pic"
          />
          <p>
            和图片无差！有停车位，室内无异味，
            装修很棒，很值这个价钱！
          </p>
        </li>
        <li>
          <img
            src="https://assets.muniao.com//UploadFiles/thumb/image/20171207/1605640bc4634858989488727b97b05a20171207224628829.jpg_150_150.jpg"
            alt="pic"
          />
          <p>
            和照片一样，还是很不错的，滑梯有点
            刺激对于小孩来说略微有点冷。
          </p>
        </li>
      </ul>
    </div>
    <!-- 
      配套设施
    -->
    <div class="mating">
      <!-- --- -->
      <div class="top-p">
        <span class="left">配套设施</span>
        <span class="right">查看全部&gt;</span>
      </div>
      <!-- ---- -->
      <div class="wraps">
        <div class="item">
          <div class="tits">
            <img :src="sc_icon7" alt="pic" />
            <span>基础设施</span>
          </div>
          <div class="spanwrap">
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>宽带上网</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>无线WIFI</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>暖气</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>沙发</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="tits">
            <img :src="sc_icon8" alt="pic" />
            <span>卫浴设施</span>
          </div>
          <div class="spanwrap">
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>全天热水</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>淋浴</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>毛巾/浴巾</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>拖鞋</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="tits">
            <img :src="sc_icon9" alt="pic" />
            <span>家电设施</span>
          </div>
          <div class="spanwrap">
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>空调</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>电视</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>电冰箱</span>
            </div>
            <div class="li">
              <img :src="sc_icon10" alt="pic" v-show="tips===0" />
              <img :src="sc_icon11" alt="pic" v-show="tips===1" />
              <span>洗衣机</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sc_line from "@/assets/imgs/maindetailsicon/sc_line.png";
import sc_icon6 from "@/assets/imgs/maindetailsicon/sc_icon6.png";
import sc_icon7 from "@/assets/imgs/maindetailsicon/sc_icon7.png";
import sc_icon8 from "@/assets/imgs/maindetailsicon/sc_icon8.png";
import sc_icon9 from "@/assets/imgs/maindetailsicon/sc_icon9.png";
import sc_icon10 from "@/assets/imgs/maindetailsicon/sc_icon10.png";
import sc_icon11 from "@/assets/imgs/maindetailsicon/sc_icon11.png";
export default {
  data() {
    return {
      sc_line: sc_line,
      sc_icon6: sc_icon6,
      sc_icon7: sc_icon7,
      sc_icon8: sc_icon8,
      sc_icon9: sc_icon9,
      sc_icon10: sc_icon10,
      sc_icon11: sc_icon11,
      tips: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.details-container {
  & > div {
    background: #ffffff;
    box-sizing: border-box;
    padding: 15px;
    box-shadow: 0px 1px 6px 0px rgba(84, 84, 85, 0.1);
    margin-top: 13px;
  }
  .top-p {
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .left {
      font-size: 15px;
      color: #333333;
    }
    .right {
      font-size: 12px;
      color: #999999;
    }
  }
  // --------------------
  .house-owner {
    height: 263px;
    .ownerInfo {
      height: 110px;
      margin-top: 14px;
      display: flex;
      img {
        width: 46px;
        height: 47px;
        border-radius: 50%;
      }
      .pwrap {
        width: 250px;
        margin-left: 17px;
        display: flex;
        flex-direction: column;
        .blod {
          line-height: 24px;
          height: 24px;
          font-weight: bold;
          font-size: 14px;
          color: #333333;
        }
        .spanwrap {
          height: 30px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          .van-tag {
            font-size: 9px;
            font-weight: bold;
            margin-right: 5px;
          }
        }
        .light {
          height: 51px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .item {
            .top {
              height: 30px;
              line-height: 30px;
              font-size: 19px;
              font-weight: bold;
              color: #333333;
              span {
                font-size: 11px;
              }
            }
            .bottom {
              height: 14px;
              line-height: 14px;
              font-size: 10px;
              font-weight: bold;
              color: #999999;
            }
          }
        }
      }
    }

    .msg {
      width: 100%;
      height: 50px;
      font-size: 13px;
      font-weight: 500;
      color: #333333;
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .littlespan {
      line-height: 22px;
      height: 22px;
      font-size: 12px;
      font-weight: bold;
      color: #ff9966;
    }
  }
  // -------------------------
  .evaluate {
    height: 314px;
    .topstars {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .blod {
        width: 37px;
        height: 20px;
        border-bottom: 5px solid #ff9966;
        font-size: 27px;
        font-weight: bold;
        color: #333333;
      }
      .starswrap {
        width: 79px;
        display: flex;
        justify-content: space-between;
        img {
          width: 11px;
          height: 11px;
        }
      }
      .pright {
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        line-height: 20px;
        font-size: 12px;
        font-weight: bold;
        color: #333333;
        .bottom {
          font-size: 11px;
          font-weight: 500;
        }
      }
    }
    .blodwrap {
      height: 36px;
      display: flex;
      & > div {
        width: 25%;
        height: 50px;
        display: flex;
        flex-direction: column;
        line-height: 15px;
        font-size: 13px;
        font-weight: bold;
        color: #333333;
      }
    }
    ul {
      li {
        height: 64px;
        display: flex;
        align-items: center;
        margin-top: 8px;
        img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
        p {
          margin-left: 19px;
          width: 250px;
          height: 34px;
          line-height: 17px;
          font-size: 14px;
          font-weight: 500;
          color: #333333;
        }
      }
    }
  }
  // ---------------------
  .mating {
    height: 257px;
    .wraps {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .item {
        height: 50px;
        display: flex;
        .tits {
          height: 66px;
          width: 67px;
          display: flex;
          flex-direction: column;
          img {
            width: 22px;
            height: 22px;
          }
          span {
            height: 28px;
            line-height: 28px;
            font-size: 11px;
            font-weight: bold;
            color: #333333;
          }
        }
        .spanwrap {
          width: 234px;
          .li {
            float: left;
            width: 117px;
            height: 22px;
            margin-bottom: 3px;
            img {
              width: 22px;
              height: 22px;
              display: inline-block;
              margin-right: 3px;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              height: 22px;
              line-height: 22px;
              font-size: 12px;
              font-weight: 500;
              color: #333333;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  // ----------------------
  .splitLine {
    width: 100%;
    height: 10px;
  }
}
</style>