<template>
    <div class="hs-nmroomlist">
        <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(item,index) in list" :key="index" ref="houseWrap" :dataId="index"  :style="{flexBasis:'auto'}" @click="toHouseDetail(index)">
                <van-image :src="item.imgUrl" />
                <div class="house-describe">
                    <p class="house-info">{{item.info}}</p>
                    <p class="house-address">{{item.address}}</p>
                    <p class="house-price">￥{{item.price}}</p>
                </div>
            </van-grid-item>
        </van-grid>
        <van-button type="default" block @click="toSearch" >查看更多</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        list:Array
    },
    methods:{
        toHouseDetail(i){//带着id跳转到详情页
            //给组件添加一个自定义属性，然后用这种方式去获取到这个自定义属性
            console.log(this.$refs.houseWrap[i].$attrs.dataId);
            //然后进行跳转
            this.$router.push('detail/house/'+this.$refs.houseWrap[i].$attrs.dataId);
        },
        toSearch(){//跳转到搜索页面
            this.$router.push('/search');
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/style/command.scss";
    .hs-nmroomlist .house-address{
        @include singleomit;
        height: 18px;
        line-height: 18px;
    }
    .house-describe{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 8px;
    }
</style>