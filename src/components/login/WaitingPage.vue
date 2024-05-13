<template>
  <v-progress-circular
    color="blue-lighten-3"
    indeterminate
    :size="69"
  ></v-progress-circular>
  <div class="wait-message">
    <span>Wait Please</span>
  </div>
</template>

<script>
import * as auth from "@/api/auth";
import { mapActions } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
export default {
  data() {
    return {
      code: "",
      providerName: "",
      state: "",
    };
  },
  created() {
    this.code = this.$route.query.code;
    this.providerName = this.$route.path.slice(6);
    auth.socialLogin(this.code, this.providerName).then((res) => {
      const data = res.data;
      this.saveAuth(data.userToken.accessToken, data.nickname, data.imgUri);
      this.$router.push("/");
    });
  },
  methods: {
    ...mapActions(useAuthStore, ["saveAuth"]),
  },
};
</script>

<style scoped>
.wait-message {
  margin-top: 30px;
}
</style>
