import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/login/LoginPage.vue';
import MainHome from '@/components/MainHome.vue';
import WaitingPage from '@/components/login/WaitingPage.vue';
import SignupPage from '@/components/login/SignupPage.vue';
import PostMainPage from '@/components/post/PostMainPage.vue';

const routes = [
    {
        path: '/signup',
        name: 'SignupPage',
        component: SignupPage,
    },
    {
        path: '/',
        name: 'MainHome',
        component: MainHome,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/auth/:providerName',
        component: WaitingPage,
    },

    {
        path: '/post',
        component: PostMainPage,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
