<template>
  <v-menu min-width="200px" rounded>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar
          class="img"
          v-if="isLoggedIn && imgUri !== ''"
          :image="imgUri"
        ></v-avatar>
        <v-avatar class="img" v-if="isLoggedIn && imgUri == ''"
          ><v-icon icon="mdi-account-circle" size="44"></v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <h3>{{ nickname }}</h3>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded> 내 정보 </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded> 알림 </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded @click="logout"> 로그아웃 </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import * as auth from "@/api/auth";
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
export default {
  computed: {
    ...mapState(useAuthStore, ["isLoggedIn", "imgUri", "nickname"]),
  },
  methods: {
    logout() {
      auth.logout().then(() => {
        this.deleteAuth();
      });
    },
    ...mapActions(useAuthStore, ["deleteAuth"]),
  },
};
</script>
