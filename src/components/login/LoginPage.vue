<template>
  <div class="login-title">
    <span>Login</span>
  </div>
  <v-container class="input-box">
    <v-text-field
      label="ID"
      variant="outlined"
      :rules="[rules.required]"
      v-model="loginId"
    ></v-text-field>
    <v-text-field
      label="Password"
      variant="outlined"
      :rules="[rules.required]"
      v-model="password"
      type="password"
    ></v-text-field>

    <v-alert
      v-if="modal"
      closable
      @click="setModal"
      icon="mdi-alert-circle"
      title="입력을 확인해주세요!"
      :text="errorMessage"
      variant="outlined"
    ></v-alert>

    <v-btn @click="defaultLogin" class="mt-2 submit-btn" type="submit" block
      >Submit</v-btn
    >
  </v-container>
  <v-container>
    <v-btn to="/signup" width="50%" prepend-icon="mdi-account-arrow-right">
      SignUp</v-btn
    >

    <v-img
      class="social-img"
      width="50%"
      :src="require('/src/assets/kakaoLoginBtn.png')"
      @click="getKakaoAuthToken"
    />
    <v-img
      class="social-img"
      width="50%"
      :src="require('/src/assets/naverLoginBtn.png')"
      @click="getNaverAuthToken"
    />
  </v-container>
</template>

<script>
import * as auth from "@/api/auth";
import { mapActions } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Field is required",
      },
      loginId: "",
      password: "",
      modal: false,
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["saveAuth"]),
    getKakaoAuthToken() {
      window.location.href =
        "https://kauth.kakao.com/oauth/authorize?client_id=6314c5389173bd107cdaf1388b101fb2&redirect_uri=http://localhost:3000/auth/kakao&response_type=code";
    },
    getNaverAuthToken() {
      const state = encodeURI(crypto.randomUUID());
      window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=zX2i9dfPmFNew0ETZDRM&redirect_uri=http://localhost:3000/auth/naver&state=${state}`;
    },
    defaultLogin() {
      auth
        .defaultLogin(this.loginId, this.password)
        .then((res) => {
          const data = res.data;
          this.saveAuth(data.userToken.accessToken, data.nickname, "");
          this.$router.push("/");
        })
        .catch((err) => {
          this.res = err.response.data;
          if (this.modal !== true) {
            this.modal = !this.modal;
          }
          this.errorMessage = this.res.errorStatus.description;
        });
    },
  },
};
</script>

<style scoped>
.submit-btn {
  margin-bottom: 20px;
}
.social-img {
  margin: 20px auto;
}
span {
  font-size: 25px;
}
.input-box {
  width: 80%;
  margin-top: 20px;
}
</style>
