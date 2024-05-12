import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./plugins/router";
import vuetify from "./plugins/vuetify";

// Components
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount("#app");
