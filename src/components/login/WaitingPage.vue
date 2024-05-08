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
import * as login from "@/api/login";

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
    this.state = this.$route.query.state;
    this.providerName = this.$route.path.slice(6);
    login.socialLogin(this.code, this.providerName, this.state).then(() => {
      this.$router.push("/");
    });
  },
};
</script>

<style scoped>
.wait-message {
  margin-top: 30px;
}
</style>
