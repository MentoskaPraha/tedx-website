//libraries
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

//create app
const app = createApp(App);

//add router
app.use(router);

//mount app
app.mount("#app");
