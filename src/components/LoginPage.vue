<template>
  <div class="login-title">
    <span>Login</span>
  </div>
  <v-form @submit.prevent>
    <v-container class="input-box">
      <v-text-field
        label="ID"
        variant="outlined"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        label="Password"
        variant="outlined"
        :rules="[rules.required]"
      ></v-text-field>
      <v-btn class="mt-2 submit-btn" type="submit" block>Submit</v-btn>
    </v-container>
  </v-form>
  <v-container>
    <v-btn width="50%" prepend-icon="mdi-account-arrow-right"> SignUp</v-btn>
    <v-img
      class="social-img"
      width="50%"
      :src="require('/src/assets/kakaoLoginBtn.png')"
      @click="kakaoLogin"
    />
    <v-img
      class="social-img"
      width="50%"
      :src="require('/src/assets/naverLoginBtn.png')"
      href=""
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Field is required",
      },
    };
  },
  methods: {
    kakaoLogin() {
      window.location.href =
        "https://kauth.kakao.com/oauth/authorize?client_id=6314c5389173bd107cdaf1388b101fb2&redirect_uri=http://localhost:3000/auth/kakao&response_type=code";
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
