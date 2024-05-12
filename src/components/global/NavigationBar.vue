<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Project Linking</v-app-bar-title>
    <user-avatar v-if="isLoggedIn"></user-avatar>
    <v-btn to="/login" variant="text" size="small" v-if="!isLoggedIn"
      >Login</v-btn
    >
  </v-app-bar>
</template>

<script>
import UserAvatar from "@/components/global/UserAvatar";
import { useAuthStore } from "@/store/useAuthStore";
import { mapState } from "pinia";
export default {
  components: { UserAvatar },
  computed: {
    ...mapState(useAuthStore, ["isLoggedIn", "imgUri"]),
  },
};
</script>
