<template>
    <div>
        <van-swipe-cell :before-close="beforeClose">
            <van-card
                :thumb="img"
                title="系统消息"
                desc="eqqghewrwuqqrghdddddd"
            >
                <template #tag>
                    <div class="msg">12</div>
                </template>
                <template #footer>
                    <span>10:30</span>
                </template>
            </van-card>
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="click"/>
            </template>
        </van-swipe-cell>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img:require('../../assets/imgs/xx_icon_.png')
        }
    },
    methods: {
        // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
    },
    click(){
        console.log(1);
    }
    },

}
</script>
<style lang="scss" scoped>
    .van-card{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid rgb(202, 202, 202);
        position: relative;
        .van-card__title{
            margin-top: 5px;
            font-size: 15px;
            height: 14px;
            font-weight: 700;
        }
        .van-card__desc{
            margin-top: 6px;
            font-size: 14px;
            height: 15px;
            width: 131px;
            color: #333333;
            line-height: 15px;
        }
        .van-card__footer{
            position: absolute;
            right: 15px;
            top: 20px;
            color: #999999;
            font-size: 11px;
        }
        .msg{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            color: white;
        }
    }
    .van-card__header,
    .van-card__thumb,
    .van-card__content{
        height: 45px;
    }
    .van-card__thumb{
        width: 45px;
    }
    .van-swipe-cell__right button{
        height: 60px;
    }

</style>