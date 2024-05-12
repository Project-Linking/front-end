import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    accessToken: "",
    nickname: "",
    imgUri: "",
  }),
  actions: {
    saveAuth(token, nickname, imgUri) {
      (this.isLoggedIn = true),
        (this.accessToken = token),
        (this.nickname = nickname),
        (this.imgUri = imgUri);
    },
  },
});
