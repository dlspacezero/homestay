<template>
    <div class="topSettings">
        <van-grid clickable :column-num="2" :border='false' center gutter='15'>
            <van-grid-item v-for="(item,index) in list" :key="index" to="/">
                <img :src="item.image" />
            </van-grid-item>
   
        </van-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
            {
                image:require('../../assets/imgs/mine/login_nav_icon.png'),
            },
            {
                image:require('../../assets/imgs/mine/_login_nav_icon.png'),
            }]
            
            
        }
    },
}
</script>
<style lang="scss" scoped>

    .topSettings{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: flex-end;
        background-color: white;
        background-color: yellowgreen;
        img{
            width: 22px;
            height: 22px;
        }
    }
</style>