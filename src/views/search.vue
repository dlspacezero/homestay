<template>
<div class="nm-search" @touchstart="start($event)" @touchmove="move($event)" >
    <!-- 头部导航 -->
<Header />
<Select  :movevalue="movevalue" />
<Content :movevalue="movevalue" />
  </div>
</template>

<script>
import { Toast } from 'vant';
import Header from '../components/nm/nm-search-header'
import Select from '../components/nm/nm-search-select'
import Content from '../components/nm/nm-search-content'
export default {
  data() {
    return {
      starty:'',
      movey:'',
      movevalue:49,
      number:true,
    };
  },

  components: {
      Header,
      Select,
      Content
  },

  computed: {},

  mounted() {
    //  window.addEventListener('scroll',this.toucha)
  },

  methods: {
       start(e){
        
         console.log(this.number)
         this.starty=e.touches[0].clientY
      console.log(this.starty);
      if(this.number===false){
          this.movevalue=0
        }
    },
    move(e){
         this.movey=e.touches[0].clientY
         if(this.number===true){
           this.movevalue= this.movey-this.starty+49
           }
          if(this.number===false){
            this.movevalue=this.movey-this.starty
          }
         if(this.movevalue>=49){
           this.movevalue=49
           this.number=true
         }else if(this.movevalue<=0){
           this.movevalue=0
           this.number=false
         }
      console.log(this.movevalue);
    }
    
  }
};
</script>
<style lang='scss' scoped>

.nm-search{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // 头部搜索
    
}
.van-tabbar__placeholder{
  height: 0;
}
</style>
