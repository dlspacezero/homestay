<template>
    <div class="selfCredit">
        <div class="wrap">
            <van-grid :column-num="4"  :border="false">
            <van-grid-item v-for="(item,index) in dataList" :key="index"   >
                <span :class="item.icon"  class="iconfont"></span>
                <p>{{item.title}}</p>
            </van-grid-item>
            
        </van-grid>

        </div>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            dataList:[
                {
                    title:'我的评价',
                    icon:'icon-shoucang',              
                },
                {
                    title:'芝麻信用',
                    icon:'icon-zmxy',              
                },
                {
                    title:'小白信用',
                    icon:'icon-order_icon',              
                },
                {
                    title:'我的故事',
                    icon:'icon-shuben',              
                },
                {
                    title:'开具发票',
                    icon:'icon-dingdanliebiao-tianchong',              
                },
                {
                    title:'求租',
                     icon:'icon-dingdanguanli',              
                },
                {
                    title:'意见反馈',
                    icon:'icon-xinfeng',              
                },
                {
                    title:'兑换券',
                    icon:'icon-xianxiaquan',              
                }
            ]
        }
    },
    methods: {
        getdata(){
            console.log(this.dataList)
        }
    },
    mounted() {
        this.getdata();
    },
}
</script>

<style lang="scss" scoped>

    .selfCredit{
        width: 100%;
        height: 200px;
        background-color: #F9F9F9;
        margin-top: 10px;
        
    .wrap{
        background-color: white;
        height: 182px;
        margin:  0 15px 0 15px;
        padding-top:18px ;
        
    }
        
        p{  
            width: 56px;
            height: 13.33px;
            font-size: 14px;
            font-weight: 500;
            margin-top: 13.67px;
            text-align: center;
        }
        span{
            display: inline-block;
            width: 23.67px;
            height: 22.67px;
            font-size: 25px;
           
        }
    }
</style>