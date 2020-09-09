<template>
  <div class="scroll">
    <div>
      <router-view></router-view>
      <noMain />
      <div class="nominate">
        <!-- 热门入住地板块 -->
        <van-divider :style="{margin: '15px'}" />
        <nmTitle title='热门入住地-北京'/>
        <nmTabs />
        <!-- 腰部不同类型选择板块 -->
        <nmChose />
        <!-- 品牌民宿板块 -->
        <van-divider :style="{margin: '15px'}" />
        <nmTitle title="品牌民宿"/>
        <nmBanner />
        <!-- 城市主题板块 -->
        <van-divider :style="{margin: '15px'}" />
        <nmTitle title="城市主题"/>
        <nmCityTopic />
        <!-- top/city板块 -->
        <van-divider :style="{margin: '15px'}" />
        <nmTitle title="TOP / CITY"/>
        <nmChoseCity />
      </div>
      <!-- 双色背景部分 -->
      <div class="anotherBg"></div>
    </div>
</div>    
</template>

<script>
import BScroll from 'better-scroll';
import noMain from "@/components/nm/nm-main.vue";
import nmTitle from '../components/nm/nm-title'
import nmTabs from '../components/nm/nm-tabs'
import nmChose from '../components/nm/nm-chose'
import nmBanner from '../components/nm/nm-banner'
import nmCityTopic from '../components/nm/nm-cityTopic'
import nmChoseCity from '../components/nm/nm-choseCity'
export default {
  data(){
    return {
      activeName: 'a',
    }
  },
  components:{
    noMain,
    nmTitle,
    nmTabs,
    nmChose,
    nmBanner,
    nmCityTopic,
    nmChoseCity 
  },
  async mounted() {
    this.$nextTick(()=>{
      let bscroll = new BScroll('.scroll',{
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

<style lang="scss" >
.scroll{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  // overflow: hidden;
  .anotherBg{
    position: absolute;
    right: 0;
    top: 0;
    width: 181px;
    height: 100%;
    z-index: -1;
  }
}
</style>