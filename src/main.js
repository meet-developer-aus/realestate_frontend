import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"
import TopMenu from './components/Menu.vue';

// import VueTouch from 'vue-touch';
import router  from "./router/route"

import { createMetaManager } from 'vue-meta'
const app = createApp(App);

app.use(router);


// app.use(VueTouch);
app.use(createMetaManager())
app.component('TopMenu', TopMenu);

app.mount('#app');