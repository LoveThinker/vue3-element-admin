import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
// 本地SVG图标
import "virtual:svg-icons-register";
// 引入 Uno.css
import "uno.css";

createApp(App).use(createPinia()).mount("#app");
