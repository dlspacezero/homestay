<template>
    <div class="selfCredit">
        <van-grid :column-num="4">
            <van-grid-item v-for="(item,index) in dataList" :key="index" icon="photo-o" :text="item.title"  />
        </van-grid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList:[
                {
                    title:'我的评价',
                    icon:'',              
                },
                {
                    title:'我的评价',
                    icon:'',              
                },
                {
                    title:'我的评价',
                    icon:'',              
                },
                {
                    title:'我的评价',
                    icon:'',              
                },
                {
                    title:'我的评价',
                    icon:'',              
                },
                {
                    title:'我的评价',
                     icon:'',              
                },
                {
                    title:'我的评价',
                    icon:'',              
                },
                {
                    title:'我的评价',
                    icon:'',              
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

<style lang="scss">
    .selfCredit{
        width: 100%;
        height: 6rem;
        background-color: red;
    }
</style>