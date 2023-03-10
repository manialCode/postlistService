import { createApp } from "vue";
import App from "./App.vue";
import "./scss/_reset.scss";
import "./scss/_util_clases.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

const app = createApp(App);

app.use(router).mount("#app");
