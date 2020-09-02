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
            maxDate: new Date(2021, 1, 2)
        }
    },
    methods: {
        goback(){

        },
        clear(){
            this.$refs.clear.reset();
        },
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            const [start, end] = date;
            this.show = false;
            this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
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
    .hs-calendar{
        display: flex;
        flex-direction: column;
        .van-nav-bar{
            height: 37px;
            position: fixed;
            top: 0;
            left: 0;
            width: 375px;
            .van-icon{
                color: #EE8975;
            }
            .van-nav-bar__text{
                color: #EE8975;
                font-size: 16px;
                font-weight: 400;
                @include pingfang;
            }
            .van-nav-bar__title {
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #2B2B2B;
            }
        }
        .van-calendar__header{
            box-shadow: none;
        }
        .van-calendar__weekdays {
            height: 30px;
            width: 375px;
            background: #F5F5F5;
            position: fixed;
            top: 37px;
            left: 0;
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
            .van-calendar__day{
                margin-bottom: 10px;
                font-size: 13px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #383737;
            }
            .weekday {
                color: #EE8975;
            }
            .van-calendar__month-title{
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #545454;
            }
            .van-calendar__day--middle{
                color: white!important;
                z-index: 99;
                &::after{
                    opacity: 1;
                    background: #EE8975;
                    z-index: -1;
                }
            }
            .van-calendar__day--start{
                color: #fff!important;
            }
            .van-calendar__day--end{
                color: #fff!important;
            }
        }
        .van-calendar__day--disabled{
            color: #383737;
        }
    }
</style>
