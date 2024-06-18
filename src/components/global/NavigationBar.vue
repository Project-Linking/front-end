<template>
    <v-toolbar dense class="custom-toolbar">
        <v-row justify="space-between" align="center">
            <v-col cols="auto">
                <v-btn icon color="primary">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <v-btn icon color="primary" to="/home">
                    <v-icon>mdi-home-outline</v-icon>
                </v-btn>

                <v-divider class="mx-3" length="24" thickness="2" vertical />

                <v-btn variant="text" to="/post"> 프로젝트 게시판 </v-btn>
                <v-btn variant="text" to="/post"> 지원서 </v-btn>
            </v-col>
            <v-col cols="auto">
                <v-btn v-if="!isLoggedIn" to="/login">로그인</v-btn>
                <v-btn v-if="!isLoggedIn" to="/signup">회원가입</v-btn>
                <v-btn v-if="isLoggedIn" @click="logout">로그아웃</v-btn>
            </v-col>
        </v-row>
    </v-toolbar>
</template>

<script>
import { mapState } from 'pinia';
import { useAuthStore } from '@/store/useAuthStore';
export default {
    components: {},
    computed: {
        ...mapState(useAuthStore, ['isLoggedIn']),
    },
    methods: {
        logout() {
            const authStore = useAuthStore();
            authStore.deleteAuth();
        },
    },
};
</script>

<style scoped>
.custom-toolbar {
    background-color: white;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
}
</style>
