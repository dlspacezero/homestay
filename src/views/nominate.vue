<template>
  <div class="nominate">
    <!-- 热门入住地板块 -->
    <van-divider />
    <nmTitle />
    <van-tabs v-model="activeName">
      <van-tab title="标签 1" name="a">内容 1</van-tab>
      <van-tab title="标签 2" name="b">内容 2</van-tab>
      <van-tab title="标签 3" name="c">内容 3</van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
import nmTitle from '../components/nm/nm-title'
export default {
  data(){
      return{
        activeName: 'a',
      }
    },

  components:{
    nmTitle
  }
};
</script>
<style lang="scss" >
.nominate{
  margin:0 15px;
}
</style>