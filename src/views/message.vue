<template>
    <div>
        <van-nav-bar  title="消息"/>
        <msgSystem />
        <msgOthers />
    </div>
</template>
<script>
import msgSystem from '@/components/msg/msg-system.vue'
import msgOthers from '@/components/msg/msg-others.vue'
export default {
    components:{
        msgSystem,
        msgOthers
    }
}
</script>
<style lang="scss" scoped >
    .van-nav-bar__title{
        font-size: 45px;
        color: #333333;
    }
</style>