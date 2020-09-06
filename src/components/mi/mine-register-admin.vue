<template>
  <div class="admin">
    <div class="register-admin">
      <!-- 退出按钮 -->
      <a href="javascript:;" class="exit van-hairline--surround" @click="toback">
        <img src="@/assets/img/sign_out.png" alt />
      </a>
      <!-- logo -->
      <div class="register-logo">
        <div class="logo">
          <img src="@/assets/img/dl_icon.png" alt />
        </div>
        <div class="register-logo-title">
          <div class="title-img">
            <img src="@/assets/img/木鸟民宿.png" alt />
          </div>
          <p>只为美好住宿多一种选择</p>
        </div>
      </div>
      <!-- 手机号码 -->
      <div class="register-tel">
        <label for="tel" class="van-hairline--right">
          +86
          <!-- 小箭头 -->
          <div class="smalldiv"></div>
        </label>
        <input type="number" name="tel" id="tel" placeholder="请输入手机号" />
        <!-- 获取验证码 -->
        <!-- <a href="javascript:;" class="register-tel-getrequier van-hairline--left" v-show="time==120" @click="timeless">获取验证码</a> -->
        <!-- 点击以后出现倒计时 -->
        <a
          href="javascript:;"
          class="register-tel-getrequier van-hairline--left"
          v-show="time<120"
          :v-model="time"
        >{{time}}s以后可重发</a>
      </div>
      <!-- 输入密码 -->
      <div class="register-password">
        <input type="password" placeholder="请输入密码" />
        <a href="javascript:;">忘记密码?</a>
      </div>
      <!-- 登录按钮 -->
      <a href="javascript:;" class="button">登录</a>
  
    </div>
 
  </div>
</template>

<script>
import Regtel from '@/components/mi/mine-register-tel.vue'
export default {
  data() {
    return {
      time: 120,
      value: "",
      showKeyboard: true,
      radio: "1",
      showlogin: 1,
      componentname:'',
    };
  },
  components: {
      Regtel
  },

  computed: {},

  mounted() {},

  methods: {
      toback(){//后退
        this.$router.go(-1);
      },
      changecomponent(){
          this.componentname='Regtel'
        //   this.showbox=false
      },
    timeless() {
      let timer = setInterval(() => {
        this.time -= 20;
        if (this.time <= 0) {
          console.log(1);
          clearInterval(timer);
          this.time = 120;
        }
      }, 1000);
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
  },
};
</script>
<style lang='scss' scoped>
.register-admin {
  
  width: 100%;
  background: white;
  // background: lightblue;
  display: flex;
  flex-direction: column;

  .exit {
    width: 22px;
    height: 22px;

    margin: 20px 0 34px 10px;
    border-style: dashed;
    border-color: black;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // logo
  .register-logo {
    width: 100%;
    height: 39px;
    display: flex;
    margin-bottom: 41px;
    .logo {
      width: 39px;
      height: 39px;
      margin-left: 16px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .register-logo-title {
      width: 200px;
      height: 39px;
      margin-left: 12px;

      .title-img {
        width: 86px;
        height: 24px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        width: 100%;
        height: 10px;
        font-size: 10px;
        color: #333333;
        margin-top: 3px;
      }
    }
  }
  .register-tel {
    width: 344px;
    height: 49px;
    display: flex;
    margin-left: 16px;
    background: #f8f8f8;
    align-items: center;
    justify-content: space-between;
    label {
      width: 62px;
      height: 27px;
      font-size: 15px;
      text-align: center;
      line-height: 27px;
      position: relative;
      border-color: #eaeaea;
      .smalldiv {
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
    #tel {
      width: 278px;
      height: 27px;
      line-height: 27px;
      border: none;
      background: transparent;
      color: #bdbdc0;
      font-size: 15px;
      padding-left: 13px;
    }
    // 获取验证码
    .register-tel-getrequier {
      width: 90px;
      height: 27px;
      text-align: center;
      line-height: 27px;
      border-color: #eaeaea;
      font-size: 10px;
      color: #bdbdc0;
    }
  }


  // 输入密码
  .register-password {
    margin-top: 12px;
    width: 344px;
    height: 49px;
    display: flex;
    margin-left: 16px;
    background: #f8f8f8;
    align-items: center;
    justify-content: space-between;
    input {
      width: 241px;
      height: 27px;
      line-height: 27px;
      border: none;
      background: transparent;
      color: #bdbdc0;
      font-size: 15px;
      padding-left: 13px;
    }
    a {
      line-height: 27px;
      width: 90px;
      font-size: 11px;
      height: 27px;
      color: #9a9a9a;
      text-align: center;
    }
  }
  // 登录按钮
  .button {
    width: 344px;
    height: 48px;
    margin: 0 auto;
    margin-top: 16px;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    color: white;
    border-radius: 24px;
    background: linear-gradient(90deg, #eb5e3a 0%, #f09c38 100%);
  }
}

</style>
