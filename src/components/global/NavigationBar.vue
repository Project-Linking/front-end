<template>
    <v-toolbar dense class="custom-toolbar">
        <v-btn icon color="primary">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-btn icon color="primary" to="/home">
            <v-icon>mdi-home-outline</v-icon>
        </v-btn>

        <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical />
        <v-btn variant="text" to="/post"> 프로젝트 게시판 </v-btn>
        <v-btn variant="text"> 프로젝트 게시판 </v-btn>
        <v-btn variant="text"> 프로젝트 게시판 </v-btn>
        <v-btn variant="text"> 프로젝트 게시판 </v-btn>
        <v-btn variant="text"> 프로젝트 게시판 </v-btn>
        <v-btn variant="text"> 프로젝트 게시판 </v-btn>

        <v-spacer></v-spacer>
        <v-text-field
            rounded
            max-width="200"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            placeholder="키워드로 검색해보세요!"
            hide-details
        ></v-text-field>
        <user-avatar v-if="isLoggedIn"></user-avatar>
        <v-btn v-if="!isLoggedIn" to="/login" text small>Login</v-btn>
    </v-toolbar>
</template>

<script>
import UserAvatar from '@/components/global/UserAvatar';
import { mapState } from 'pinia';
import { useAuthStore } from '@/store/useAuthStore';
export default {
    components: { UserAvatar },
    computed: {
        ...mapState(useAuthStore, ['isLoggedIn']),
    },
};
</script>

<style scoped>
.custom-toolbar {
    background-color: white;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
}
</style>
