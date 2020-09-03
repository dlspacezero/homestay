<template>
    <div class="cityTopic">
        <div class="onecity">
            <div>
                <div class="cityImg">
                    <span class="txt">美景</span>
                    <img src="../../assets/imgs/1.png" alt="">
                </div>
            </div>
            <div class="cityInfo">
                <span>#杭州</span>
                <span>美景</span>
            </div>
        </div>
        <div class="onecity">
            <div>
                <div class="cityImg">
                    <span class="txt">惬意</span>
                    <img src="../../assets/imgs/2.png" alt="">
                </div>
            </div>
            <div class="cityInfo">
                <span>#厦门</span>
                <span>惬意</span>
            </div>
        </div>
        <div class="onecity">
            <div>
                <div class="cityImg">
                    <span class="txt">秀美</span>
                    <img src="../../assets/imgs/3.png" alt="">
                </div>
            </div>
            <div class="cityInfo">
                <span>#青岛</span>
                <span>秀美</span>
            </div>
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

<style lang="scss" >
.cityTopic{
    width: 345px;
    margin: 20px 15px 30px;
    display: flex;
    .onecity{
        width: 115px;
        display: flex;
        flex-direction: column;
        .cityImg{
            width: 115px;
            height: 152px;
            position: relative;
            &>img{
            width: 100%;
            height: 100%;
            border-radius: 0;
            }
        }
        .txt{
            font-size: 18px;
            color: #fff;
            position: absolute;
            left: 35%;
            top: 45%;
        }
        .cityInfo{
            margin-top: 20px;
            span:first-child{
                font-size: 15px;
                color: #343434;
                font-weight: bold;
            }
            span:last-child{
                margin-left: 10px;
                color: #9A9A9A;
                font-size: 15px;
            }
        }
    };
    
}
</style>




  