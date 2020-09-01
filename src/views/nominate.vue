<template>
  <div class="nominate">
    <!-- 热门入住地板块 -->
    <van-divider />
    <nmTitle />
    <nmTabs />
    <nmCard />
  </div>
</template>

<script>
import nmTitle from '../components/nm/nm-title'
import nmTabs from '../components/nm/nm-tabs'
import nmCard from '../components/nm/nm-card'
export default {
  data(){
      return{
        activeName: 'a',
      }
    },

  components:{
    nmTitle,
    nmTabs,
    nmCard
  }
};
</script>

<style lang="scss" >
.nominate{
  margin:0 15px;
}
</style>