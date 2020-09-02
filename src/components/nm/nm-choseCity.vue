<template>
    <div class="choseCity">
        <div class="oneLine">
            <span>成都</span>
            <span>北京</span>
            <span>杭州</span>
            <span>武汉</span>
            <span>上海</span>
        </div>
        <div class="oneLine">
            <span>重庆</span>
            <span>广州</span>
            <span>西安</span>
            <span>南京</span>
            <span>全部</span>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
};
</script>

<style lang="scss">
.choseCity{
    width: 345px;
    height: 88px;
    background: #fff;
    box-shadow: 1px 1px 3px rgb(238, 234, 234);
    margin: 0 15px 30px;
    .oneLine{
        height: 44px;
        border-bottom: 1px solid #ebedf0;
        display: flex;
        justify-content: space-between;
        span{
            font: 15px;
            color: #666;
            line-height: 44px;
            margin: 0 20px;
        }
    }
    .oneLine:last-child{
            border-bottom: none;
    }
}
</style>