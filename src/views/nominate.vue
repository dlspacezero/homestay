<template>
  <div class="nominate">
    <!-- 热门入住地板块 -->
    <van-divider :style="{margin: '15px'}" />
    <nmTitle title='热门入住地 北京'/>
    <nmTabs />
    <!-- 查看更多板块跳转房间列表页 -->
    <nmSeemore />
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
    <nmTitle title="TOP/CITY"/>
    <nmChoseCity />
  </div>
</template>

<script>
import nmTitle from '../components/nm/nm-title'
import nmTabs from '../components/nm/nm-tabs'
import nmSeemore from '../components/nm/nm-seemore'
import nmChose from '../components/nm/nm-chose'
import nmBanner from '../components/nm/nm-banner'
import nmCityTopic from '../components/nm/nm-cityTopic'
import nmChoseCity from '../components/nm/nm-choseCity'

export default {
  data(){
      return{
        activeName: 'a',
      }
    },
  components:{
    nmTitle,
    nmTabs,
    nmSeemore,
    nmChose,
    nmBanner,
    nmCityTopic,
    nmChoseCity
  }
};
</script>

<style lang="scss" >

</style>