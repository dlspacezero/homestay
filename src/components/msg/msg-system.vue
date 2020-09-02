<template>
    <div>
        <van-swipe-cell>
            <van-image
                round
                width="44"
                height="44"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
    </div>
</template>
<style lang="scss" scoped>
    
</style>