<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  
  data() {
    return {
      
    };
  },
  
  watch:{
    //解决vueroute在hash模式下跳转不重置滚动条高度的问题
    '$route':function(to,from){
　　　 document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; 
    }
  }
};
</script>

<style lang="scss" >
  #app{
    width: 100%;
    height: 100%;
  }
</style>
