<template>
    <v-container>
        <v-card elevation="0" class="mx-auto" max-width="350px">
            <v-card-title> Login </v-card-title>
            <v-card-text>
                <v-text-field
                    label="아이디"
                    variant="outlined"
                    :rules="[rules.required]"
                    v-model="loginId"
                ></v-text-field>
                <v-text-field
                    label="비밀번호"
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

                <div class="d-flex">
                    <v-checkbox color="primary" density="compact" label="로그인 유지"></v-checkbox>
                    <v-checkbox color="primary" density="compact" label="아이디 저장"></v-checkbox>
                </div>

                <v-btn
                    size="x-large"
                    color="primary"
                    variant="tonal"
                    @click="defaultLogin"
                    class="submit-btn"
                    type="submit"
                    block
                    >로그인
                </v-btn>

                <v-btn to="/signup" variant="text" class="signup-btn"> 회원가입</v-btn>

                <v-row align="center" class="my-4">
                    <v-col>
                        <v-divider></v-divider>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="auto">
                        <span style="font-size: 15px; color: #9e9e9e">소셜 계정으로 로그인</span>
                    </v-col>
                    <v-col>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>

                <v-img
                    class="social-img"
                    width="60%"
                    :src="require('/src/assets/kakaoLoginBtn.png')"
                    @click="getKakaoAuthToken"
                />
                <v-img
                    class="social-img"
                    width="60%"
                    :src="require('/src/assets/naverLoginBtn.png')"
                    @click="getNaverAuthToken"
                />
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import * as auth from '@/api/auth';
import { mapActions } from 'pinia';
import { useAuthStore } from '@/store/useAuthStore';
export default {
    data() {
        return {
            rules: {
                required: (value) => !!value || 'Field is required',
            },
            loginId: '',
            password: '',
            modal: false,
        };
    },
    methods: {
        ...mapActions(useAuthStore, ['saveAuth']),
        getKakaoAuthToken() {
            window.location.href =
                'https://kauth.kakao.com/oauth/authorize?client_id=6314c5389173bd107cdaf1388b101fb2&redirect_uri=http://localhost:3000/auth/kakao&response_type=code';
        },
        getNaverAuthToken() {
            const state = encodeURI(crypto.randomUUID());
            window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=zX2i9dfPmFNew0ETZDRM&redirect_uri=http://localhost:3000/auth/naver&state=${state}`;
        },
        defaultLogin() {
            auth.defaultLogin(this.loginId, this.password)
                .then((res) => {
                    const data = res.data;
                    this.saveAuth(data.userToken.accessToken, data.nickname, '');
                    this.$router.push('/');
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
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0;
}

.signup-btn {
    justify-content: flex-start;
    color: #9e9e9e; /* 연한 색상 */
}

.submit-btn {
    font-weight: bold;
    margin-bottom: 20px;
}
.social-img {
    margin: 20px auto;
}
span {
    font-size: 25px;
}
.input-box {
    margin-top: 20px;
}
</style>
