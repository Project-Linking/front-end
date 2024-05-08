import { createApp } from "vue";
import router from "./plugins/router";
import vuetify from "./plugins/vuetify";

// Components
import App from "./App.vue";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
