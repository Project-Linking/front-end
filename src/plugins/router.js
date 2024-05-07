import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";

const routes = [
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
