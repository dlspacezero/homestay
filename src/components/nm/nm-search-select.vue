<template>
  <div class="select" >
      <!-- 日期选择 -->
      <a href="javascript:;" class="data" >
        <!-- @click="showtime=true" -->
          <!-- <p>住09-02</p>
          <p>退09-03</p> -->
          {{date}}
          <!--  右下角小箭头 -->
        <div class="small-div"></div>
        
      </a>
       <!-- <van-calendar v-model="showtime" type="range" @confirm="onConfirm" :style="{ height: '100%' }"  /> -->
      <!-- 选择位置选项 -->
      <a href="javascript:;"  >
        选择位置
          <!--  右下角小箭头 -->
        <div class="small-div"  ></div>
       
      </a>
       <!-- <van-popup v-model="showplace" position="bottom" :style="{ height: '100%' }"  closeable close-icon-position="top-left">选择位置</van-popup> -->
       <!-- 默认排序下拉菜单 -->
       <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
              <div class="small-div"></div>
        </van-dropdown-menu>
      <a href="javascript:;"  >
         筛选条件
           <!--  右下角小箭头 -->
        <div class="small-div"></div>
      </a>
      <!-- <van-popup v-model="showselect" position="bottom" :style="{ height: '100%' }"  closeable close-icon-position="top-left">筛选条件</van-popup> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        date: '请选择住店日期',
        showtime:false,
        showplace:false,
        showselect:false,
         value1: 0,
          option1: [
        { text: '默认排序', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '价格最低', value: 2 },
        { text: '价格最高', value: 3 },
        { text: '预订最多', value: 4 },
        { text: '新上房源', value: 4 },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   弹出框事件
       showPlace() {
      this.showplace = true;
    },
          showSelect() {
      this.showselect = true;
    },
    // formatDate(date) {
    //   return `${date.getMonth() + 1}/${date.getDate()}`;
    // },
    // onConfirm(date) {
    //   const [start, end] = date;
    //   this.showtime = false;
    //   this.date = `住店${this.formatDate(start)}
    //                 离店${this.formatDate(end)}`;
    // },
  }
};
</script>
<style lang='scss' scoped>
.select{
    width: 335px;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // 所有列表样式
        a{
            width: 80px;
            height: 15px;
            font-size: 15px;
            color: black;
            text-align: center;
            position: relative;
            // 小箭头样式
           
        }
         .small-div{
                position: absolute;
                width: 0;
                height: 0;
                border: 2px solid black;
                border-color: transparent black black transparent;
                bottom: 0;
                right: 0;
            }
        // 时间样式
        .data{
            width: 50px;
            height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: red;
            font-size: 12px;
            padding: 0 15px;
        }
        .van-dropdown-menu{
             width: 80px;
            height: 48px;
            font-size: 15px;
            color: black;
            text-align: center;
            position: relative;
            overflow: hidden;
               .small-div{
                position: absolute;
                width: 0;
                height: 0;
                border: 2px solid black;
                border-color: transparent black black transparent;
                top: 28px;
                right: 0;
            }
        }
}
    </style>
