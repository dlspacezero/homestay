<template>
    <div class="chose">
        <div class="showCon" v-for="(item,index) in list" :key="index">
            <img :src="item.url" alt="">
            <article>{{item.title}}</article>
            <p>{{item.text}}</p>
        </div>
    </div>
</template>

<script>
import middle1 from '../../assets/imgs/home_middle1.png'
import middle2 from '../../assets/imgs/home_middle2.png'
import middle3 from '../../assets/imgs/home_middle3.png'
import middle4 from '../../assets/imgs/home_middle4.png'
export default {
  data(){
      return{
          list:[{
              title:'信用免押',
              text:'芝麻/小白',
              url:middle1
          },{
              title:'入住无忧',
              text:'送出行险',
              url:middle2
          },{
              title:'人工审核',
              text:'安心入住',
              url:middle3
          },{
              title:'身份验证',
              text:'安全可靠',
              url:middle4
          },]
      }
    }
};
</script>

<style lang="scss" >
.chose{
    width: 345px;
    display: flex;
    margin-left: 15px;
    justify-content: space-between;
    .showCon{
        box-shadow: 1px 1px 2px rgb(238, 234, 234);
        width: 80px;
        height: 62px;
        background: #FFFFFF;
        padding-left: 8px;
        padding-top: 12px;
        margin-bottom: 26px;
        box-sizing: border-box;
        position: relative;
        article{
            width: 70px;
            height: 13px;
            font-size: 14px;
            color: #333333;
        }
        p:last-child{
            width: 70px;
            height: 12px;
            margin-top: 5px;
            font-size: 11px;
            color: #999999;
        }
        img{
            width: 18px;
            height: 18px;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
        }
    }
}
</style>




  