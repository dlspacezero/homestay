<template>
    <div class="card">
        <div class="cardtop">
            <div class="name">
                <p>切换成房东</p>
                <span class="note">欢迎加入木鸟大家庭</span>
            </div>
            <van-button round plain type="primary" size="small" color="#333333">点击切换</van-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .card{
        
        width: 100%;
        height: 1.95rem;
        background-color: white;
        .cardtop{
        display: flex;
        justify-content: space-between;
        padding: 14.8px 20.5px 13.53px 13.67px;
        margin: 0 15px  0 15px;
        background-color: #353B55;
        border-radius: 10px;
        p{
            font-size: 17px;
            color: #FEFEFE;
            
        } 
        .note{
            margin-top: 11.67px;
            font-size: 11px;
            color:#FEFEFE;
        }
        // .van-button__content{
        //     vertical-align: center;
        // // line-height: 50px;
        // // font-size: 50px;
        //    }
    }
    
    }
</style>