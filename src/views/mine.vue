<template>
    <div>
        <Setting />
        <Namepart />
        <Orderpart/>
        <redPakage/>
        <coupon />
        <selfCredit />
        <van-divider>客服电话：400-056-0055</van-divider>
    </div>
</template>
<script>
import Namepart from '@/components/mi/mi-namepart.vue'
import Setting from '@/components/mi/mi-gongju.vue'
import Orderpart from '@/components/mi/mi-orderpart.vue'
import redPakage from '@/components/mi/mi-redpakage.vue'
import coupon from '@/components/mi/mi-coupon.vue'
import selfCredit from '@/components/mi/mi-selfcredit.vue'
export default {
    components:{
        Namepart,Setting,redPakage,coupon,selfCredit,Orderpart
    }
}
</script>
<style lang="scss">
    .van-divider{
        font-size: .45rem;
        color: #999999;
        font-family: 'PingFang-SC-Medium';
        margin-top: .56rem;

    }
    body{
        background-color: #F9F9F9;
    }
</style>