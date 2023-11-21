import { createApp } from "vue";
import store from "./store/index";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
createApp(App).use(store).mount("#app");
