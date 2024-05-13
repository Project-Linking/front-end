<template>
  <v-app-bar color="grey-lighten-4">
    <v-img
      class="mx-2"
      :src="require('/src/assets/logo.png')"
      max-height="60"
      max-width="60"
      contain
    ></v-img>
    <v-app-bar-title align="left"> Project Linking </v-app-bar-title>
    <user-avatar v-if="isLoggedIn"></user-avatar>
    <v-btn to="/login" variant="text" size="small" v-if="!isLoggedIn"
      >Login</v-btn
    >
  </v-app-bar>
</template>

<script>
import UserAvatar from "@/components/global/UserAvatar";
import { mapState } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
export default {
  components: { UserAvatar },
  computed: {
    ...mapState(useAuthStore, ["isLoggedIn"]),
  },
};
</script>
