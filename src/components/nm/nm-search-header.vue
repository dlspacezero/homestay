<template>
   <header>
     <!-- 左边箭头 -->
     <a href="javascript:;" class="header-left" ><van-icon name="arrow-left"  size="20" color="#FF9084"/></a>
     <!-- 中间搜索框 -->
     <div class="header-search">
         <!-- 点击选择城市 -->
         <!-- <van-cell is-link @click="showPopup" >
             北京 <div class="icon"></div>
             </van-cell> -->
             <a href="javascript:;"  @click="showPopup" class="city" >城市</a>
        <van-popup v-model="show" position="bottom" :style="{ height: '100%' }"  closeable close-icon-position="top-left">城市列表</van-popup>
           <!-- 搜索框 -->
    <van-search  placeholder="搜索景点、地标、房源编号" background="#f7f8fa"  shape="round" />
  
     </div>
     <!-- 头部右边文字 -->
    <a href="javascript:;" class="header-right">地图</a>
    
 </header>
</template>

<script>
export default {
  data() {
    return {
        // 弹出框属性
        show: false,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      //   弹出框事件
       showPopup() {
      this.show = true;
    },
  }
};
</script>
<style lang='scss' scoped>
header{
        width: 100%;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 8px;
        // 左边箭头
        .header-left{
            width: 10px;
            height: 18px;
        }
        // 中间搜索框
        .header-search{
            width: 280px;
            height: 33px;
            display: flex;
            align-items: center;
            background: #f7f8fa;
            border-radius: 33px;
            justify-content: flex-start;
            // 下拉框
                .city{
                    margin-left: 5px;
                    color: #9A9A9A;
                    width: 50px;
                    border-right: 1px solid #C9C6C6;
                    height: 15px;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                // 倒三角形
                    .icon{
                        width: 0;
                        height: 0;
                        border: 6px solid black;
                        border-width: 6px 3px;
                        border-color: black transparent transparent transparent;
                        margin-top: 3px;
                    }
                }
                // 搜索框
                .van-search{
                    width: 210px;
                    height: 33px;
                    font-size: 17px;
                    padding: 0;
                }
                
        }
        // 右边按钮
       .header-right{
                    width: 31px;
                    height: 15px;
                    font-size: 15px;
                    color: #9A9A9A;
                }
    }</style>
