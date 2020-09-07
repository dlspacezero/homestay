<template>
    <div>
        <van-nav-bar
            title="支付成功"
            left-text="返回"
        />
        <div class="paynotice">
            <img :src=pay alt="">
            <p>支付成功</p>
            <span>￥12.00</span>
        </div>
        <van-button type="primary" size="large">完成</van-button>
        <van-button type="primary" size="large">返回首页</van-button>

    </div>
</template>
<script>
import pay from '../assets/imgs/zhifuchenggong.png'
export default {
    data() {
        return {
            pay:pay
        }
    },
}
</script>