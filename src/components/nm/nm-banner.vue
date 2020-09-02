<template>
    <div id="homeBanner">
        <nmTardemark />
        <van-swipe :loop="false" :width="337" :show-indicators="false" :autoplay="3000">
            <van-swipe-item v-for="i in 4" :key="i">
                <div class="bannerImg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2173918788,77286624&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="bannerWord">
                    <span>
                        <p class="imgTitle">豪华LOFT时尚智能通州北关地…</p>
                        <p class="imgInfo">整租-1居室-宜住2人  北京通州区</p>
                    </span>
                    <span>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598982276683&di=f883cfccb96f58eab67e4d15f1c307e0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fef9978f541e23dca04f5658150ac06e79877fc709b33-NlsaW7_fw658" alt="">
                    </span>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import nmTardemark from '../nm/nm-trademark'
export default {
  data(){
      return{
          current: 0,
      }
    },
    components:{
        nmTardemark
    }
};
</script>
<style lang="scss" >
@import '../../assets/style/nominate.css';
#homeBanner{
    position: relative;
    .trademark{
        position: absolute;
        right: 15px;
        top: -30px;
    }
}
</style>