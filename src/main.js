import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import VConsole from 'vconsole'
import store from './store';
let vconsole = new VConsole()
const app = createApp(App)
import 'normalize.css'
import 'amfe-flexible';
import 'vant/lib/index.css';
app.use(router)
app.use(store)
app.mount('#app')
