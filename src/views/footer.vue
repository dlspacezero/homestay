<template>
    <div>
        <router-link to="/index"><div>首页</div></router-link>
        <router-link to="/collect">收藏页</router-link>
        <router-link to="/discover">发现页</router-link>
        <router-link to="/message">消息页</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
    a{
        font-size: 20px;
    }
</style>