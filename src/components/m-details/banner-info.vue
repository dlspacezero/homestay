<template>
  <div class="m-detail-banner-container">
    <!-- 轮播图 -->
    <van-swipe lazy-render autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(item,index) in imgArr" :key="index">
        <img :src="item" alt="pic" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{imgArr.length}}</div>
      </template>
    </van-swipe>
    <!-- 基本详情 -->
    <div class="infoWrap">
      <img
        src="https://assets.muniao.com//UploadFiles/thumb/image/20180704/af1d3554888645a3ad697060de12e10c20180704163329873.jpg_150_150.jpg"
        alt="photo"
        class="owner"
      />
      <div class="praise">
        <span>👍</span>
        <span
          style="
            font-size: 12px;
            font-weight: bold;
            color: #333333;"
        >5.0</span>
        <span style="color:#FD8735">"超赞"</span>
        <span>1条评价</span>
      </div>
      <div class="list-li-title">
        <span class="cyber">网红民宿</span>
        <span class="ableDo">
          <van-tag color="#eceefd" text-color="#4d64f5">可做饭</van-tag>
        </span>
      </div>
      <h2>卓小花【白色恋人】春熙路太古里/双地铁环公交两居室/复式</h2>
      <div class="specification">
        <span>朝阳区-普通公寓-50㎡</span>
      </div>
    </div>
    <!-- 预定日期    需要跳转获取数据-->
    <div class="reserv-date" @click="arrivalTime">
      <div class="datewrap">
        <span class="date">{{ start }}</span>
        <span class="duration">{{ daynum }}晚</span>
        <span class="date">{{ end }}</span>
      </div>
      <span class="req">修改</span>
    </div>
    <!--  位置上面的房间信息栏 -->
    <div class="house-size">
      <div class="item" v-for="(item,index) in scicon" :key="index">
        <img :src="item.icon" alt="pic" />
        <div>
          <span class="top">{{item.top}}</span>
          <span class="bottom">{{item.bottom}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sc_icon1 from "@/assets/imgs/maindetailsicon/sc_icon1.png";
import sc_icon2 from "@/assets/imgs/maindetailsicon/sc_icon2.png";
import sc_icon3 from "@/assets/imgs/maindetailsicon/sc_icon3.png";
import { mapState } from "vuex";
export default {
  data() {
    return {
      current: 0,
      scicon: [
        {
          icon: sc_icon1,
          top: "9室1厅",
          bottom: "整租",
        },
        {
          icon: sc_icon2,
          top: "宜住1人",
          bottom: "1个卫生间",
        },
        {
          icon: sc_icon3,
          top: "1张床",
          bottom: "查看详情",
        },
      ],
      imgArr: [
        "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/haerbin.jpg",
        "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/chengdu.jpg",
        "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/hangzhou.jpg",
      ],
      start: "", //开始日期
      end: "", //结束日期
      daynum: 1, //天数
    };
  },
  mounted() {
    //对开始日期和退房日期进行初始化
    this.initDate();
    this.$emit("mesg", [this.start, this.end, this.daynum]);
  },
  computed: {
    //用state的辅助函数拿date属性
    ...mapState({
      //函数写法
      date: (state) => state.date,
    }),
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    //对开始日期和退房日期进行设置
    initDate() {
      let start = 0;
      let end = 0;
      //如果从日历上选择了日期
      if (this.date.status === 0) {
        start = this.date.start.getTime();
        end = this.date.end.getTime();
        //天数
        this.daynum = (end - start) / 86400000; //86400000一天的毫秒数
      } else {
        //如果没有选择日期
        //默认为今天和明天
        //今天
        start = new Date().getTime();
        //明天
        end = new Date();
        end = end.setDate(end.getDate() + 1);
      }
      //转换日期格式
      this.start = this.formatDate(start);
      this.end = this.formatDate(end);
    },
    formatDate(date) {
      //将日期格式为9月6日格式
      //转换为日期对象
      const dateObject = new Date(date);
      //加一是因为月份是0~11来表示的
      let month = dateObject.getMonth() + 1;
      //获取天数
      let day = dateObject.getDate();
      return `${month}月${day}日`;
    },
    arrivalTime() {
      //点击跳转到选择入住时间列表页
      this.$router.push("/calendar");
    },
  },
};
</script>

<style lang="scss" scoped>
.m-detail-banner-container {
  position: relative;
  // 轮播图分页图标样式
  .custom-indicator {
    position: absolute;
    right: 17px;
    bottom: 35px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
  }
  .van-swipe-item {
    img {
      display: block;
      width: 375px;
      height: 234px;
    }
  }
  //   info部分样式
  .infoWrap {
    margin: 0 17px 0 15px;
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
      width: 100%;
      height: 31px;
      display: flex;
      align-items: center;
      overflow: hidden;
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
    }

    .ableDo {
      height: 14px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      span {
        margin-left: 7px;
        padding: 0 5px;
        height: 14px;
        border-radius: 3px;
        line-height: 14px;
        font-size: 10px;
        font-weight: 500;
      }
    }
    h2 {
      width: 280px;
      height: 32px;
      line-height: 32px;
      font-size: 17px;
      font-weight: bold;
      color: #333333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .specification {
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      font-weight: bold;
      color: #f19781;
    }
  }
  //   预定房间的 日期板块 样式
  .reserv-date {
    width: auto;
    height: 35px;
    background: #f5f5f5;
    margin: 10px 17px 8px 15px;
    padding: 0 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .datewrap {
      line-height: 35px;
      font-size: 15px;
      font-weight: bold;
      color: #333333;
      display: flex;
      align-items: center;
      .duration {
        margin: 0 3px;
        padding: 0 5px;
        height: 14px;
        line-height: 14px;
        border: 0px solid #333333;
        background: #fff;
        border-radius: 7px;
        font-size: 10px;
        font-weight: bold;
        color: #333333;
      }
    }
    .req {
      font-size: 12px;
      font-weight: bold;
      color: #333333;
    }
  }
  //   位置上面的房间信息栏
  .house-size {
    width: auto;
    margin: 24px 15px;
    padding: 0 15px;
    height: 52px;
    background: #ffffff;
    box-shadow: 0px 0px 7px 0px rgba(60, 60, 60, 0.13);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      width: 75px;
      height: 52px;
      display: flex;
      align-items: center;
      img {
        width: 22px;
        height: 22px;
      }
      div {
        width: 100%;
        height: 52px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 4px;
        .top {
          font-size: 12px;
          font-weight: bold;
          color: #333333;
        }
        .bottom {
          margin-top: 5px;
          font-size: 10px;
          font-weight: bold;
          color: #999999;
        }
      }
    }
  }
}
</style>