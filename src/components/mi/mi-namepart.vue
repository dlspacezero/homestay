<template>
    <div>
        <van-grid :column-num="2">
  <van-grid-item icon="home-o" text="文字" dot />
  <van-grid-item icon="search" text="文字" badge="99+" />
<littleCard/>
</van-grid>
    <littleCard />
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