<template>
    <div class="choseCity">
        <div class="oneLine">
            <van-tabs :line-height="0">
                <van-tab v-for="(item,index) in cityList1" :key="index" :title="item.name"></van-tab>
            </van-tabs>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
        cityList1:[{
            name:'成都'
        },{
            name:'北京'
        },{
            name:'杭州'
        },{
            name:'武汉'
        },{
            name:'上海'
        },{
            name:'重庆'
        },{
            name:'广州'
        },{
            name:'西安'
        },{
            name:'南京'
        },{
            name:'全部'
        }]
    }
  }
};
</script>

<style lang="scss">
.choseCity{
    box-shadow: 1px 1px 3px rgb(238, 234, 234);
    margin: 0 15px 0;
    .oneLine{
        position: relative;
        background: #fff;
        .van-tabs__wrap{
            margin-left: -25px;
            height: 88px;
            margin-bottom: 0px;
        }
        .line{
                width: 345px;
                height: 1px;
                position: absolute;
                left: 0;
                top: 50%;
                background: #ebedf0;
                z-index: 10;
            }
        .van-tabs__nav{
            width: 345px;
            flex-wrap: wrap;
            .van-tab{
                width: 69px;
                font-size: 15px;
                color: #666;
                line-height: 44px;
                z-index: 20;
            }
            .van-tab--active{
                color: #FA9485;
            }
        }
        
    }
}
</style>