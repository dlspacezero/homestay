<template>
    <div class="hs-nmroomlist">
        <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(item,index) in list" :key="index" :style="{flexBasis:'auto'}">
                <van-image :src="item.imgUrl" />
                <div class="house-describe">
                    <p class="house-info">{{item.info}}</p>
                    <p class="house-address">{{item.address}}</p>
                    <p class="house-price">￥{{item.price}}</p>
                </div>
            </van-grid-item>
        </van-grid>
        <van-button type="default" block >查看更多</van-button>
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