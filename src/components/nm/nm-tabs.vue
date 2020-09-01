<template>
    <van-tabs 
    line-width="94px" 
    line-height="1px"
    >
        <van-tab v-for="(item,index) in tabList" 
        :title="item.title" 
        :key="index"
        title-active-color="#333"
        title-inactive-color="#999"

        >
            {{ item.title }}内容
        </van-tab>
    </van-tabs>
</template>

<script>

export default {
  data(){
      return{
        activeName: 'a',
        tabList:[{
            title:'天安门广场',
            contents:'内容1'
        },{
            title:'北京西站',
            contents:'内容2'
        },{
            title:'古北水镇',
            contents:'内容3'
        }]
      }
    }
};
</script>

<style lang="scss" >
.van-tabs{
    .van-tab {
    width: 94px;
    margin: 0;
    padding: 0;
    flex: none;
    }
}
  
</style>