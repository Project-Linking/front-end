import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/login/LoginPage.vue";
import MainHome from "@/components/MainHome.vue";
import WaitingPage from "@/components/login/WaitingPage.vue";

const routes = [
  {
    path: "/",
    name: MainHome,
    component: MainHome,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/auth/:providerName",
    name: "WaitingPage",
    component: WaitingPage,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
