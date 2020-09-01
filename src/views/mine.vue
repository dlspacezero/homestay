<template>
    <div>
        <Setting />
        <Namepart />
        <van-divider>客服电话：400-056-0055</van-divider>
    </div>
</template>
<script>
import Namepart from '@/components/mi/mi-namepart.vue'
import Setting from '@/components/mi/mi-gongju.vue'
export default {
    components:{
        Namepart,Setting
    }
}
</script>
<style lang="scss">
    .van-divider{
        font-size: .45rem;
        color: #999999;
        font-family: 'PingFang-SC-Medium';

    }
</style>