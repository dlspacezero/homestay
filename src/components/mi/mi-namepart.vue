<template>
    <div class="selfInfo">
        <div class="toppart">
            <div class="name">
                <p>Akali</p>
                <span>agfjgayu</span>
            </div>
            <van-image width="60" height="60" src=""  round/>
        </div>
        <div class="cardpart">
            <littleCard />
        </div>
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
        height: 178px;
        background-color: white;
    .toppart{
        display: flex;
        justify-content: space-between;
        padding: 21px 19.5px 0 14.7px;
        margin-bottom: 25.5px;  
        p{
            font-size: 18px;
            color: #333333;
            font-weight: 700;
        } 
        span{
            font-size: 10px;
            color:teal;
        }     
    }
    
    }
</style>