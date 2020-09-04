<template>
  <div class="hs-calendar">
    <van-nav-bar
        title="房间排期"
        right-text="清空"
        left-arrow
        @click-left="goback"
        @click-right="clear"
    />
    <van-calendar
        type="range"
        :show-title=false
        :show-mark=false
        @confirm="onConfirm"
        :poppable="false"
        :show-confirm="false"
        :formatter="formatter"
        color="#EE8A76"
        :max-date="maxDate"
        row-height=40
        ref="clear"
    />
  </div>
</template>

<script>
export default {
    data() {
        return {
            //设置日历的最长时间
            maxDate: new Date(2021, 1, 28)
        }
    },
    methods: {
        //回退功能
        goback(){
            this.$router.go(-1);
        },
        //清空功能
        clear(){
            this.$refs.clear.reset();
        },
        //获取日期
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        //选中时间区间
        onConfirm(date) {
            const [start, end] = date;
            this.show = false;
            this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        //日期格式化
        formatter(day) {
            const year = day.date.getFullYear();
            const month = day.date.getMonth() + 1;
            const date = day.date.getDate();
            const week = day.date.getDay();
            if(week===0||week===6){
                day.className = 'weekday';
            }
            if (month === 10) {
                if (date === 1) {
                    day.text = '国庆节';
                    day.className = 'weekday';
                } 
            }
            if (month === 11) {
                if (date === 1) {
                    day.text = '万圣节';
                    day.className = 'weekday';
                }else if (date === 12){
                    day.text = '感恩节';
                    day.className = 'weekday';
                }
            }
            if (month === 12) {
                if (date === 21) {
                    day.text = '冬至';
                    day.className = 'weekday';
                }else if (date === 24){
                    day.text = '平安夜';
                    day.className = 'weekday';
                }else if (date === 25){
                    day.text = '圣诞节';
                    day.className = 'weekday';
                }
            }
            if (year === 2021){
                if (month === 1) {
                    if (date === 1) {
                        day.text = '元旦';
                        day.className = 'weekday';
                    }
                }
                if (month === 2) {
                    if (date === 11) {
                        day.text = '除夕';
                        day.className = 'weekday';
                    }else if (date === 12){
                        day.text = '春节';
                        day.className = 'weekday';
                    }else if (date === 14){
                        day.text = '情人节';
                        day.className = 'weekday';
                    }else if (date === 26){
                        day.text = '元宵节';
                        day.className = 'weekday';
                    }
                }
            }
            //设置选择时间区间时的显示文本
            if (day.type === 'start') {
                day.text = '入住';
                day.bottomInfo = '';
            } else if (day.type === 'end') {
                day.text = '离开';
                day.bottomInfo = '';
            }
            return day;
        }
    },
};
</script>
<style lang='scss'>
@import '../assets/style/command.scss';
    //日历整体样式
    .hs-calendar{
        display: flex;
        flex-direction: column;
        //顶部标签栏样式
        .van-nav-bar{
            height: 37px;
            position: fixed;
            top: 0;
            left: 0;
            width: 375px;
            //返回图标样式
            .van-icon{
                color: #EE8975;
            }
            //清空按钮样式
            .van-nav-bar__text{
                color: #EE8975;
                font-size: 16px;
                font-weight: 400;
                @include pingfang;
            }
            //顶部标题样式
            .van-nav-bar__title {
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #2B2B2B;
            }
        }
        //取消星期栏的阴影
        .van-calendar__header{
            box-shadow: none;
        }
        //调整星期栏位置
        .van-calendar__weekdays {
            height: 30px;
            width: 375px;
            background: #F5F5F5;
            position: fixed;
            top: 37px;
            left: 0;
            //设置星期栏内容样式
            .van-calendar__weekday{
                font-size: 13px;
                font-family: PingFang SC;
                font-weight: 400;
                &:first-child{
                color: #EE8975;
                }
                &:last-child{
                    color: #EE8975;
                }
            } 
        }
        //年月栏样式
        .van-calendar__header-subtitle{
            position: absolute;
            top: 67px;
            left: 0px;
            width: 375px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #545454;
        }
        .van-calendar__body{
            margin-top: 111px;
            //具体每一天的样式
            .van-calendar__day{
                margin-bottom: 10px;
                font-size: 13px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #383737;
            }
            // .selectable-day {
            //     color: #383737!important;
            // }
            .weekday {
                color: #EE8975!important;
            }
            //年月日样式
            .van-calendar__month-title{
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #545454;
            }
            //选中时间区间的区间样式
            .van-calendar__day--middle{
                color: white!important;
                z-index: 99;
                &::after{
                    opacity: 1;
                    background: #EE8975;
                    z-index: -1;
                }
            }
            //入住的样式
            .van-calendar__day--start{
                color: #fff!important;
            }
            //离开的样式
            .van-calendar__day--end{
                color: #fff!important;
            }
        }
        //不能选择的日期的样式
        .van-calendar__day--disabled {
            color: #c8c9cc!important;
        }
    }
</style>
