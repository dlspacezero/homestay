<template>
    <div class="seemore">
      <van-button type="primary" plain block color="#FF9180" @click="goList">查看更多</van-button>
    </div>
</template>

<script>
export default {
  data(){
      return{}
  },
  methods:{
    goList(){
      // this.$route.push()
    }
  }
};
</script>

<style lang="scss" >
@import '../../assets/style/command.scss';
.van-button{
    width: 345px;
    height: 55px;
    font-size: 16px;
    // margin: 0 15px 46px;
}
</style>




  