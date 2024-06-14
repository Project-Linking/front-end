<template>
    <div class="signup-title">
        <span>Sign Up</span>
    </div>
    <v-container class="input-box">
        <v-text-field
            label="ID"
            variant="outlined"
            :rules="[rules.required, rules.idCharsValidate]"
            v-model="id"
        ></v-text-field>
        <v-text-field
            label="Password"
            variant="outlined"
            type="password"
            :rules="[rules.required, rules.pwCharsValidate]"
            v-model="pw"
        ></v-text-field>
        <v-text-field
            label="Nickname"
            variant="outlined"
            :rules="[rules.required, rules.nicknameCharsValidate]"
            v-model="nickname"
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
        <v-btn @click="signup" class="mt-2 submit-btn" type="submit" block>Submit</v-btn>
    </v-container>
</template>

<script>
import * as login from '@/api/auth';
import { mapActions } from 'pinia';
import { useAuthStore } from '@/store/useAuthStore';
export default {
    data() {
        return {
            rules: {
                required: (value) => !!value || 'Field is required',
                idCharsValidate: (value) =>
                    (value && value.length >= 5 && value.length <= 30) || '아이디는 5-30자 이내로 입력해주세요.',
                pwCharsValidate: (value) =>
                    (value && value.length >= 5 && value.length <= 30) || '비밀번호는 5-30자 이내로 입력해주세요.',
                nicknameCharsValidate: (value) =>
                    (value && value.length >= 2 && value.length <= 10) || '닉네임은 5자 이상 10자 이내로 입력해주세요',
            },
            id: '',
            pw: '',
            nickname: '',
            modal: false,
            errorMessage: '',
            loading: false,
            res: null,
        };
    },
    methods: {
        ...mapActions(useAuthStore, ['saveAuth']),

        signup() {
            login
                .signup(this.id, this.pw, this.nickname)
                .then(() => {
                    this.$router.push('/login');
                })
                .catch((err) => {
                    this.res = err.response.data;
                    if (this.modal !== true) {
                        this.modal = !this.modal;
                    }
                    this.errorMessage = this.res.errorStatus.description;
                });
        },
        setModal() {
            this.modal = !this.modal;
        },
    },
};
</script>

<style scoped>
span {
    font-size: 25px;
}
.submit-btn {
    margin-bottom: 20px;
}
.input-box {
    width: 80%;
    margin-top: 20px;
}
</style>
