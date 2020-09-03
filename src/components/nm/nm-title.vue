<template>
    <h6 class="title">
      {{title}}
    </h6>
</template>

<script>
export default {
  data(){
      return{}
    },
    props:['title']
};
</script>
<style lang="scss" >
  .title{
    width: 330px;
    height: 17px;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    margin: 38px 15px 12px;
  }
</style>