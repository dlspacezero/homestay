<template>
  <!-- 发现-特色房源页 -->
  <section class="hs-featureHouse">
    <div class="wrap">
      <div
      class="hs-typeHouse"
      v-for="(item,index) in specialList"
      :key="index"
      @click="toSpecial(1)"
    >
      <div class="hs-typeImg">
        <img src="../../assets/images/discover-special-01.jpg" alt />
      </div>
      <span class="hs-typeEn">{{item.enm}}</span>
      <span class="hs-typeCn">{{item.cnm}}</span>
    </div>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data() {
    return {
      specialList: [
        {
          img: "../../assets/images/discover-special-01.jpg",
          enm: "Villa",
          cnm: "别墅",
        },
        {
          img: "../../assets/images/discover-special-02.jpg",
          enm: "Sea view room",
          cnm: "海景房",
        },
        {
          img: "../../assets/images/discover-special-03.jpg",
          enm: "Thematic features",
          cnm: "主题特色",
        },
        {
          img: "../../assets/images/discover-special-04.jpg",
          enm: "Lovers room",
          cnm: "情侣房",
        },
        {
          img: "../../assets/images/discover-special-05.jpg",
          enm: "loft",
          cnm: "复式",
        },
        {
          img: "../../assets/images/discover-special-06.jpg",
          enm: "Courtyard",
          cnm: "四合院",
        },
        {
          img: "../../assets/images/discover-special-07.jpg",
          enm: "Wooden house",
          cnm: "木屋",
        },
        {
          img: "../../assets/images/discover-special-08.jpg",
          enm: "Ancient town",
          cnm: "古镇客栈",
        },
        {
          img: "../../assets/images/discover-special-09.jpg",
          enm: "Famhouse",
          cnm: "农家院",
        },
      ],
    };
  },
  methods: {
    // 进入特色房源详情页
    toSpecial(id) {
      this.$router.push("/detail/special/" + id);
    },
  },
  async mounted() {
    this.$nextTick(()=>{
      let bscroll = new BScroll('.hs-featureHouse',{
        click:true,       //滚动部分允许点击
        pullUpLoad:true  //允许上拉加载
      })
      //上拉加载，监听pullingUp方法
      bscroll.on('pullingUp',()=>{
          // this.getMore('movieIds',this.currentId);
          // this.getMore({
          //   movieIds:this.currentId
          // })
          bscroll.finishPullUp();   //告诉bscoll已经加载完了，可以下一次加载了
      })
    })
  },
};
</script>

<style lang="scss">
@import "../../assets/style/command.scss";
.hs-featureHouse {
  padding: 26px 15px 0px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .hs-typeHouse {
    display: flex;
    flex-direction: column;
    color: #333;
    @include pingfang;
    margin-bottom: 32px;
    .hs-typeImg {
      width: 103px;
      height: 116px;
      border-radius: 6px;
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
</style>
