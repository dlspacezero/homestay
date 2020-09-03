<template>
    <div class="card">
      <div class="oneCard">
        <img class="cardUrl" src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00210-2840.jpg" alt="">
        <p class="cardDescribe">整租-1居室-宜住2人</p>
        <p class="cardInfo">和风 日式简约风东直门顶灯落地窗</p>
        <div class="cardPrice">
          <span>￥</span>
          <span>298</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
      return{}
    }
};
</script>
<style lang="scss" >
@import '../../assets/style/command.scss';
  .card{
    .oneCard{
      width: 166px;
      margin-bottom: 32px;
      .cardUrl{
        width: 100%;
        height: 99px;
        margin-bottom: 10px;
        border-radius: 6px;
      }      
      .cardDescribe{
        font-size: 11px;
        width: 160px;
        margin-bottom: 6px;
        color: #666;
        font-weight: bold;
      }
      .cardInfo{
        width: 160px;
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 18px;
        height: 18px;
        font-weight: bold;
        color: #333;
        z-index: 10;
        @include singleomit();
      }
      .cardPrice{
        color: $themecolor;
        font-size: 14px;
      }
    }
  }
</style>




  