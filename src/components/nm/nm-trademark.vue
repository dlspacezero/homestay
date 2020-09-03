<template>
    <div class="trademark">
      <div class="people" @click="gotoList">
          <span class="peopleImg">
              <van-image
                class="img1"
                round
                width="21px"
                height="21px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              <van-image
                class="img2"
                round
                width="21px"
                height="21px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              <van-image
                class="img3"
                round
                width="21px"
                height="21px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
          </span>
          <span class="peopleNum">
              <span>102家品牌已入驻</span>
              <van-icon name="arrow" />
          </span>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
      gotoList(){
        //   this.$router.replace('/menu')
      }
  }
};
</script>

<style lang="scss">
@import '../../assets/style/command.scss';
.trademark{
    width: 170px;
    height: 20px;
    position: relative;
    .people{
        display: flex;
        justify-content: space-between;
        .img1{
            position: absolute;
            left: 0;
        }
        .img2{
            position: absolute;
            left: 13px;
            z-index: 2;
        }
        .img3{
            position: absolute;
            left: 25px;
            z-index: 3;
        }
    }
    .peopleNum{
        width: 110px;
        height: 20px;
        line-height: 20px;
        display: flex;
        align-items: center;
        &:first-child{
            font-size: 12px;
            color: #333;
            @include singleomit()
        }
        .van-icon-arrow{
            margin-left: 4px;
        }
    }
}
  
</style>