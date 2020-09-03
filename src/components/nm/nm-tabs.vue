<template>
    <div class="tabs">
        <van-tabs 
        v-model="active"
        line-width="94px"
        line-height="1px"
        >
            <nmHouselist />
        </van-tabs>
    </div>

    

</template>

<script>
import nmHouselist from "./nm-houselist"
import nmCard from '../nm/nm-card'
export default {
  data(){
    return{
        active:0,
        activeName: 'a',
        tabList:[{
            title:'天安门广场',
        },{
            title:'北京西站',
        },{
            title:'古北水镇',
        }]
    }
  },
    components:{
        nmCard,
        nmHouselist
    }
};
</script>

<style lang="scss">
.van-tabs{
    margin: 0 15px;
    .van-tabs__nav{
        background: none;
    }
    .van-tabs__wrap{
        margin-bottom: 24px;
        .van-tab {
        width: 94px;
        padding: 0;
        flex: none;
        }
    }
    .nmCardList{
    width: 345px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    }
}
  
</style>