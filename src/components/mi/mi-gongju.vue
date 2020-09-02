<template>
    <div class="topSettings">
        
        <van-icon name="setting-o" color="#000000"/>
        <van-icon name="todo-list-o"  color="#000000"/>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .topSettings{
        width: 100%;
        height: 1.32rem;
        display: flex;
        justify-content: flex-end;
        .van-icon{
            line-height: 1.32rem;
            margin-right: .35rem;
        }
    }
</style>