<template>
    <div class="selfInfo">
        <van-grid :column-num="2">
  <van-grid-item icon="home-o" text="文字" dot />
  <van-grid-item icon="search" text="文字" badge="99+" />
<littleCard/>
</van-grid>
    </div>
</template>
<script>
import littleCard from '@/components/mi/mi-littlecard.vue'
export default {
    components:{
        littleCard
    }
}
</script>
<style lang="scss" scoped>
    .selfInfo{
        width:100%;
        height: 5.33rem;
        background-color: aqua;
    }
</style>