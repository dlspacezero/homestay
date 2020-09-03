<template>
    <div class="selfInfo">
        <div class="toppart">
            <div class="name">
                <p>注册/登录</p>
                <span>agfjgayu</span>
            </div>
            <van-image width="66" height="66" src=""  round/>
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
            font-size: 21px;
            color: #333333;
            font-weight: 700;
            height: 20px;
            margin-bottom: 17.33px;
        } 
        span{
            font-size: 11px;
            color:#999999;
        }     
    }
    
    }
</style>