<template>
    <v-container class="write-dialog">
        <v-speed-dial>
            <template v-slot:activator="{ props: activatorProps }">
                <v-fab v-bind="activatorProps" size="large" icon="mdi-pencil" @click="createPost"></v-fab>
            </template>
        </v-speed-dial>
        <LoginCheckDialog v-if="showLoginDialog" @closeDialog="showLoginDialog = !showLoginDialog" />
    </v-container>
</template>

<script>
import { useAuthStore } from '@/store/useAuthStore';
import LoginCheckDialog from './LoginCheckDialog.vue';

export default {
    components: {
        LoginCheckDialog,
    },
    data() {
        return {
            showLoginDialog: false,
        };
    },
    methods: {
        createPost() {
            const authStore = useAuthStore();

            if (authStore.$state.accessToken) {
                this.$router.push('/post/create');
            } else {
                this.showLoginDialog = true;
            }
        },
    },
};
</script>

<style scoped>
.write-dialog {
    position: fixed;
    left: 95vh;
    bottom: 50px;
    z-index: 100;
}
</style>
