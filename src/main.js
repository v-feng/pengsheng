import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ViewUIPlus from 'view-ui-plus';
import App from './App.vue';
import router from './router';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import 'amfe-flexible';
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ViewUIPlus);
app.mount('#app');
