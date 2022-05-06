import { createApp } from "vue";
import { createPinia } from "pinia";
import desingComponents from "./plugins/desing-components";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(desingComponents);

app.mount("#app");
