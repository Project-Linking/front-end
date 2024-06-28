import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import { quillEditor } from 'vue3-quill';

// Components
import App from './App.vue';
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount('#app');
app.use(quillEditor);
