<template>
  <div class="regesiter">
    <component :is="componentname"></component>
    <div class="footer">
      <a
        href="javascript:;"
        class="register-login"
        @click="changecomponent"
        v-show="componentname==='Regtel'"
      >账号密码登录</a>
      <a href="javascript:;" class="register-login" @click="changecomponent1" v-show="componentname==='Regadmin'" >手机验证码登录</a>

      <!-- <router-link active-class="register-login" ></router-link> -->
      <!-- 其他方式登录 -->
      <p class="register-otherlogin">
        其他方式登录
        <a href="javascript:;">
          <img src="@/assets/img/dl_btn.png" alt />
        </a>
      </p>
      <!-- 登录方式 -->
      <div class="register-loginway">
        <a href="javascript:;">
          <img src="@/assets/img/home_qq.png" alt />
        </a>
        <a href="javascript:;">
          <img src="@/assets/img/home_weibo.png" alt />
        </a>
        <a href="javascript:;">
          <img src="@/assets/img/home_weixin.png" alt />
        </a>
      </div>
      <!-- 同意协议 -->
      <van-radio-group v-model="radio">
        <van-radio name="1" checked-color="lightgreen" icon-size="15px">
          登录代表您同意
          <span>《服务协议》《隐私政策》</span>
        </van-radio>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import Regtel from "@/components/mi/mine-register-tel.vue";
import Regadmin from "@/components/mi/mine-register-admin";
export default {
  data() {
    return {
      time: 120,
      value: "",
      showKeyboard: true,
      radio: "1",
      componentname: "Regtel",
      showbox: true,
    };
  },

  components: {
    Regtel,
    Regadmin,
  },

  computed: {},

  mounted() {},

  methods: {
    changecomponent() {
      this.componentname = "Regadmin";
      //   this.showbox=false
    },
    changecomponent1() {
        console.log(1);
      this.componentname = "Regtel";
      //   this.showbox=false
    },
  },
};
</script>
<style lang='scss' scoped>
.regesiter {
  width: 100%;
  // background: lightblue;
  display: flex;
  flex-direction: column;
  // 账号密码登录
  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    .register-login {
      // width: 90px;
      height: 18px;
      line-height: 18px;
      margin: 23px auto 0;
      font-size: 12px;
      color: #999999;
      border-bottom: 2px solid #f5f5f5;
    }
    // 其他方式登录
    .register-otherlogin {
      width: 92px;
      display: flex;
      height: 12px;
      align-content: center;
      justify-content: space-around;
      font-size: 10px;
      margin: 285px auto 25px;
      color: #999999;
      a {
        width: 9px;
        height: 9px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 登录方式
    .register-loginway {
      width: 131px;
      height: 28px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      a {
        width: 28px;
        height: 28px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 同意协议
    .van-radio-group {
      width: 300px;
      // text-align: center;
      font-size: 12px;
      margin-left: 54px;
      margin-top: 80px;
      span {
        background: white;
        color: #fd7f6c;
      }
    }
  }
}
</style>
