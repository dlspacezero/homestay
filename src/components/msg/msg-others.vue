<template>
    <div>
        <van-swipe-cell :before-close="beforeClose" disabled>
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

<script>
export default {
    methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
  },
}
</script>
<style lang="scss" scoped>
    .van-card{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid rgb(202, 202, 202);
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