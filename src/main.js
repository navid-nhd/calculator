import "./assets/main.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";

import App from "./App.vue";
import router from "./router";

const options = {
  position: "top-right",
  timeout: 5000,
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast, options);

app.mount("#app");
