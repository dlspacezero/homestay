<template>
    <div>
        <van-nav-bar  title="消息"/>
        <van-pull-refresh
            success-text="刷新成功"
            v-model="isLoading" @refresh="onRefresh"
        >
        <msgSystem />
        <msgOthers />
        </van-pull-refresh>     
    </div>
</template>
<script>
import msgSystem from '@/components/msg/msg-system.vue'
import msgOthers from '@/components/msg/msg-others.vue'
export default {
    data() {
        return {
            count: 0,
            isLoading: false,
        }
    },
    components:{
        msgSystem,
        msgOthers
    },
    methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
}
</script>
<style lang="scss" scoped >
    .van-nav-bar__title{
        font-size: 15px;
        color: #333333;
        border-bottom: 1px solid rgb(202, 202, 202);
    }
    .van-pull-refresh{
        height: 570px;
    }
</style>