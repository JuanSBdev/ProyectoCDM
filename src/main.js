import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import AOS from 'aos';
// ..
const app = createApp(App)

app.use(router)

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
AOS.init();
//const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
