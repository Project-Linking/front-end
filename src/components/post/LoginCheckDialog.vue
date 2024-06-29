<template>
    <v-container>
        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">로그인이 필요합니다</v-card-title>
                <v-card-text>로그인 후 이용해주세요.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="goToLogin">로그인</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            value: {
                type: Boolean,
                default: false,
            },
        };
    },
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            },
        },
    },
    methods: {
        goToLogin() {
            this.$router.push('/login');
        },
    },
};
</script>
