<template>
<div class="content">
    <!-- 筛选条件 -->
    <div class="content-top" :style="{top:`${movevalue+51}px`}">
        <!-- 移动滑块插件 -->
        <van-swipe :loop="false" :show-indicators="false" :width="110">
            <van-swipe-item  v-for="(value,index) in list" :key="index" :class="{active:arrlist.join('').indexOf(index)!==-1}" @click="change(index)" style="width: 100px; margin-right:10px">{{value}} <div class="content-top-arrow"></div></van-swipe-item>
        </van-swipe>
        <!-- <div class="content-top-scroll">
        <a href="javascript:;" v-for="(value,index) in list" :key="index" :class="{active:index===aindex}" @click="change(index)">{{value}}</a></div> -->
    </div>
   
    <!-- 筛选出的房间 -->
    <div class="content-wrap">
       
        <div class="wrap-list"> 
             <!--中间图片 -->
        <a href="javascript:;" class="content-img van-hairline--surround">民宿特惠，抄底团购</a>
            <div class="content-house" v-for="(value,index) in 5" :key="index">
        <!-- 房间图片 -->
        <div class="content-house-img"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2574667224,539269533&fm=26&gp=0.jpg" alt="">
        <!-- 爱心 -->
        <van-icon name="like-o" />
        <!-- 评分 -->
        <p class="van-hairline--surround"> 
            <van-icon name="good-job"  color="orange"/><strong>5.0</strong> <span class="span1">&nbsp;“超赞”&nbsp;</span> <span class="span2">1条评价</span>
        </p>
        <!-- 头像 -->
        <div class="content-house-headphoto"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319772070,3114389419&fm=26&gp=0.jpg" alt=""></div>
        </div>
        <!-- 介绍 -->
        <h5>网红民宿-北欧INS风格.五颗松三居四大双人十渡中心大三层、近漂流蹦</h5>
        <!-- 房屋关键词 -->
        <span class="content-house-keywords">整租-3居室-宜住7人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京丰台区</span>
        <!-- 特点 -->
        <div class="content-house-special"><span class="van-hairline--surround span3" >今夜特价</span><span class="van-hairline--surround span4" >闪订</span><span class="van-hairline--surround span4" >地主之谊</span><span class="van-hairline--surround" >可爱宠物</span></div>
        <!-- 分割线 -->
        <div class="content-house-line"></div>
        <!-- 单价 -->
        <div class="content-house-price"><van-icon name="fire" color="#FFD44C"/><h4>￥809</h4>/晚</div>

            </div>
             <p class="content-title">设置条件，还有更多房间哦！</p>
        </div>
    </div>
    <!-- 底部提示 -->
   
</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data() {
    return {
        aindex:-1,
        arrlist:[],
        list:['优惠活动','民宿推荐','特色出行','特惠预售','可做饭','可带宠物']
    };
  },
  props:['movevalue'],
  components: {},

  computed: {},

  async mounted() {
    this.arrlist=[];
    this.$nextTick(()=>{
      let bscroll = new BScroll('.content-wrap',{
        click:true,       //滚动部分允许点击
        pullUpLoad:true  //允许上拉加载
      })
      //上拉加载，监听pullingUp方法
      bscroll.on('pullingUp',()=>{
          // this.getMore('movieIds',this.currentId);
        //   this.getMore({
        //     movieIds:this.currentId
        //   })
          bscroll.finishPullUp();   //告诉bscoll已经加载完了，可以下一次加载了
      })
    })
  },

  methods: {
      change(val){
            console.log(this.arrlist);
            if(this.arrlist.join('').indexOf(val)==-1){
                console.log(true);
                 this.arrlist.push(val)
                 console.log(this.arrlist);
            }else{
                console.log(false);
                this.arrlist.splice(this.arrlist[val],1)
                console.log(this.arrlist);
            }
       
       
      }
  }
};
</script>

<style lang='scss' scoped>
    .content{
        width: 375px;
        // padding: 0 15px;
         background: #f7f8fa;
         display: flex;
         height: 100%;
         flex-direction: column;
        //  margin-top:102px;
        padding-top: 102px;
         overflow: hidden;
        //  筛选条件
         .content-top{
                width: 345px;
                padding: 0 15px;
                height: 48px;
                position: fixed;
                z-index: 100;
                 background: #f7f8fa;
                top: 100px;
            .van-swipe{
                height: 48px;
                 .van-swipe-item{
                     width: 90px;
                height: 30px;
                background: white;
                font-size: 14px;
                color: #666666;
                text-align: center;
                line-height: 30px;
                border-radius: 15px;
                margin-top: 8px;
                // margin-right: 10px;
                position: relative;
                 .van-swipe__track{
                        width: 1000px;
                        // height: 500px;
                    .content-top-arrow{
                        width: 0;
                        height: 0;
                        border-width: 3px 1.5px;
                        border-style: solid;
                        border-color: black transparent transparent transparent;
                        position: absolute;
                        top: 15px;
                        right: 10px;
                }
                }
                

            }
              .active{
                    color: white;
                    background: red;
                }

            }
           
            
           
                    
         }
        //  中间图片
        
        .content-wrap {
            position: absolute;
            top: 150px;
            left: 0;
            right: 0;
            bottom: 0;
            background: #f7f8fa;
            .wrap-list{
                width: 100%;
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
               
                   background: #f7f8fa;
            }
        }
        //  筛选出的房间
         .content-img{
             display: block;
             width: 345px;
             height: 63px;
             background: white;
             font-size: 17px;
             color: black;
             margin-top: 9px;
             margin-bottom: 8px;
         }
        .content-house{
            position: relative;
            width: 341px;
            height: 372px;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 3px;
            margin-bottom: 19px;
            // 房间图片
                .content-house-img{
                    margin-top: 9px;
                    width: 327px;
                    height: 208px;
                    border-radius: 6px;
                    position: relative;
                    // overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                    }
                     // 爱心
                    .van-icon{
                        position: absolute;
                        top: 13px;
                        right: 10px;
                        color: white;
                        font-size: 19px;
                    }
                    // 评价
                p{  
                    z-index: 1;
                    width: 131px;
                    height: 30px;
                    position: absolute;
                    border-radius: 15px;
                    left: 5px;
                    bottom: -15px;
                    background: white;
                    font-size: 12px;
                    display: flex;
                    // justify-content: space-around;
                    align-items: center;
                        .van-icon{
                            position: relative;
                            top: 0;
                            left: 0;
                            margin-left: 8px;
                        }
                        .span1{
                            color: orange;
                        }
                        .span2{
                            color: #999999;
                        }

                }
                // 头像
                .content-house-headphoto{
                    position: absolute;
                    width: 47px;
                    height: 47px;
                    border-radius: 50%;
                    right: 5px;
                    bottom: -23.5px;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                        img{
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;

                        }
                    
                    }
                }
                // 房屋介绍
                h5{ 
                    width: 312px;
                    height: 15px;
                    font-size: 15px;
                     text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin-top: 35px;
                    margin-bottom: 9px;
                }
                // 房屋关键词
                .content-house-keywords{
                    width: 312px;
                    font-size: 11px;
                    color: #666666;
                    margin-bottom: 9px;
                }
               .content-house-special{
                   width: 312px;
                   display: flex;
                   font-size: 11px;
                    span{
                        padding: 0 3px;
                        margin-right: 5px;
                        height: 17px;
                        line-height: 17px;
                        color: #666666;
                        border-color: #E1E1E1;
                    }
                    .span3{
                        color: #F9473B;
                    }
                    .span4{
                        color: #EA6914;
                    }
               }
            //    下划线
               .content-house-line{
                   width: 337px;
                   height: 1px;
                   background: #E1E1E1;
                   position: absolute;
                   left: 0;
                   bottom: 50px;
               }
            //   单价
               .content-house-price{
                   display: flex;
                   width: 312px;
                   margin-top: 26px;
                   font-size: 12px;
                   align-items: flex-end;
                   h4{
                       font-size: 23px;
                   }
               }
                    
            }
        .content-title{
            // bottom: 0;
            width: 100%;
            height: 15px;
            font-size: 15px;
            color: #666666;
            margin-top: 22px;
            margin-bottom: 62px;
            text-align: center;
        }
       
    }

</style>
