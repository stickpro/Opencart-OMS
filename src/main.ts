import { createApp } from "vue";
import { createPinia } from "pinia";
import desingComponents from "./plugins/desing-components";

// Tabler
import '@tabler/core/dist/css/tabler.css';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(desingComponents);

app.mount("#app");
