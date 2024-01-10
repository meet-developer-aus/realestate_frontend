import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"
import TopMenu from './components/Menu/Top/TopMenu.vue';

// import VueTouch from 'vue-touch';s
import router  from "./router/route"

import { createMetaManager } from 'vue-meta'
import { createPinia } from 'pinia'
const app = createApp(App);

app.use(router);

const pinia = createPinia();
// app.use(VueTouch);
app.use(createMetaManager())

app.component('TopMenu', TopMenu);
app.use(pinia)
app.mount('#app');