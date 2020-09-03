<template>
    <div>
        <van-swipe-cell>
            <van-card
                tag="12"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
  <template #footer>

  </template>
</van-card>

            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
    </div>
</template>
<style lang="scss" scoped>
    .van-card{
        width: 100%;
        height: 60px;
        border-top: 1px solid rgb(202, 202, 202);
    }
    .van-card__header,
    .van-card__thumb,
    .van-card__content{
        height: 44px;
    }
    .van-card__thumb{
        width: 44px;
    }
    .van-swipe-cell__right button{
        height: 60px;
    }
</style>