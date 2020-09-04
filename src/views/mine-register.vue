<template>
    <div class="register">
  <div class="mine-register" v-show="showbox==true">
      <!-- 退出按钮 -->
      <a href="javascript:;" class="exit van-hairline--surround"><img src="../assets/img/sign_out.png" alt=""></a>
      <!-- logo -->
      <div class="register-logo">
          <div class="logo"><img src="../assets/img/dl_icon.png" alt=""></div>
            <div class="register-logo-title">
                <div class="title-img"><img src="../assets/img/木鸟民宿.png" alt=""></div>
                <p>只为美好住宿多一种选择</p>
            </div>

      </div>
      <!-- 手机号码 -->
      <div class="register-tel">
          <label for="tel" class="van-hairline--right">+86
              <!-- 小箭头 -->
            <div class="smalldiv"></div>
            </label><input type="number" name="tel" id="tel" placeholder="请输入手机号">
            <!-- 获取验证码 -->
            <a href="javascript:;" class="register-tel-getrequier van-hairline--left" v-show="time==120" @click="timeless">获取验证码</a>
            <!-- 点击以后出现倒计时 -->
            <a href="javascript:;" class="register-tel-getrequier van-hairline--left" v-show="time<120" :v-model="time">{{time}}s以后可重发</a>
        </div>
        <!-- 输入验证码 -->
        <van-password-input
            :value="value"
            :mask="false"
            :focused="showKeyboard"
            :gutter="15"
            @focus="showKeyboard = true"
            />
            <!-- 数字键盘 -->
        <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
            />
            <!-- 账号密码登录 -->
        <a href="javascript:;" class="register-login" @click="changecomponent">账号密码登录</a>
        
        <!-- <router-link active-class="register-login" ></router-link> -->
        <!-- 其他方式登录 -->
        <p class="register-otherlogin">其他方式登录 <a href="javascript:;"><img src="../assets/img/dl_btn.png" alt=""></a></p>
        <!-- 登录方式 -->
        <div class="register-loginway">
            <a href="javascript:;"><img src="../assets/img/home_qq.png" alt=""></a>
            <a href="javascript:;"><img src="../assets/img/home_weibo.png" alt=""></a>
            <a href="javascript:;"><img src="../assets/img/home_weixin.png" alt=""></a>
        </div>
        <!-- 同意协议 -->
        <van-radio-group v-model="radio">
            <van-radio name="1" checked-color="lightgreen" icon-size="15px">登录代表您同意<span>《服务协议》《隐私政策》</span></van-radio>
        </van-radio-group>
        
  </div>
  <component :is="componentname"></component>
  </div>
</template>

<script>
import Regadmin from '../components/mi/mine-register-admin'
export default {
  data() {
    return {
        time:120,
         value: '',
        showKeyboard: true,
          radio: '1',
          componentname:'',
          showbox:true,
        
    };
  },

  components: {
      Regadmin
  },

  computed: {},

  mounted() {},

  methods: {
      changecomponent(){
          this.componentname='Regadmin'
          this.showbox=false
      },
     
      timeless(){
           
          let timer=setInterval(() => {
             this.time-=20
             if(this.time<=0){
             console.log(1)
            clearInterval(timer)
             this.time=120
         }
         }, 1000);
         
      },
       onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
  }
};
</script>
<style lang='scss' scoped>
.mine-register{
    width: 100%;
    // background: lightblue;
    display: flex;
    flex-direction: column;
    
    .exit{
        width: 22px;
        height: 22px;
        margin: 4px 0 44px 10px;
        border-style: dashed;
        border-color: black;
            img{
                width: 100%;
                height: 100%;
            }
    }
    // logo
    .register-logo{
        width: 100%;
        height: 39px;
        display: flex;
        margin-bottom: 41px;
        .logo{
            width: 39px;
            height: 39px;
            margin-left: 16px;
                img{
                    width: 100%;
                    height: 100%;
                }
        }
        .register-logo-title{
            width: 200px;
            height: 39px;
             margin-left: 12px;
             
                .title-img{
                    width: 86px;
                    height: 24px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                }
                p{
                    width: 100%;
                    height: 10px;
                    font-size: 10px;
                    color: #333333;
                    margin-top: 3px;
                }
        }
        
    }
    .register-tel{
        width: 344px;
        height: 49px;
        display: flex;
        margin-left: 16px;
        background: #F8F8F8;
        align-items: center;
        justify-content: space-between;
            label{
                width: 62px;
                height: 27px;
                font-size: 15px;
                text-align: center;
                line-height: 27px;
                position: relative;
                border-color: #EAEAEA;
                .smalldiv{
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-width: 2.5px 2px;
                    border-style: solid;
                    border-color: transparent black black transparent;
                    right: 8px;
                    bottom: 8px;
                }
            }
            // 手机号码输入
            #tel{
                width: 188px;
                height: 27px;
                line-height: 27px;
                border: none;
                background: transparent;
                color: #BDBDC0;
                font-size: 15px;
                padding-left: 13px;
            }
            // 获取验证码
            .register-tel-getrequier{
                width: 90px;
                height: 27px;
                text-align: center;
                line-height: 27px;
                border-color: #EAEAEA;
                font-size: 10px;
                color: #BDBDC0;
            }
    }
    .van-password-input{
        margin-top: 10px;
         .van-password-input__item{
            // background: red;
            width: 35px;
            border-bottom: 2px solid #F5F5F5;
            // margin-top: 5px;
            font-size:30px;
            // font-weight: 600;
            }
    }
    // 账号密码登录
    .register-login{
        width: 73px;
        height: 18px;
        line-height: 18px;
        margin: 23px auto 0;
        font-size: 12px;
        color: #999999;
         border-bottom: 2px solid #F5F5F5;
    }
    // 其他方式登录
    .register-otherlogin{
        width: 92px;
        display: flex;
        height: 12px;
        align-content: center;
        justify-content: space-around;
        font-size: 10px;
        margin: 285px auto 25px;
        color: #999999;
            a{
                width: 9px;
                height: 9px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

    }
    // 登录方式
    .register-loginway{
        width: 131px;
        height: 28px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
            a{
                width: 28px;
                height: 28px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
            }
    }
    // 同意协议
    .van-radio-group{
        width: 300px;
        // text-align: center;
        font-size: 12px;
        margin-left: 54px;
        margin-top: 80px;
            span{
                background: white;
                color: #FD7F6C;
            }
    }
   
}
    
    </style>
