import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: "",
    isLoggedIn: useStorage("isLoggedIn", false),
    nickname: useStorage("nickname", ""),
    imgUri: useStorage("imgUri", ""),
  }),
  actions: {
    saveAuth(token, nickname, imgUri) {
      (this.accessToken = token),
        (this.isLoggedIn = true),
        (this.nickname = nickname),
        (this.imgUri = imgUri);
    },
    deleteAuth() {
      (this.accessToken = null),
        (this.isLoggedIn = false),
        (this.nickname = null),
        (this.imgUri = null);
    },
  },
});
