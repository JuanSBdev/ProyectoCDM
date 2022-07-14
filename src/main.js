import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  {BootstrapVue3,  } from 'bootstrap-vue-3'
import { BootstrapIconsPlugin, } from 'bootstrap-icons-vue'
import AOS from 'aos'

const app = createApp(App)
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
app.use(BootstrapVue3)
app.use(router)  
app.use(BootstrapIconsPlugin)

AOS.init();
//const app = createApp(App)

app.mount('#app')
