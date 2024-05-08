import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import MainHome from "@/components/MainHome.vue";

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
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
