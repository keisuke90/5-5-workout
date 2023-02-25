import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./router";
import "./assets/reset.css";

const app = createApp(App);
app.use(router);
const pinia = createPinia();
pinia.use(createPersistedState());
const options: PluginOptions = {};

app.use(pinia).use(Toast, options).mount("#app");
