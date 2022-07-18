import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Explorar from '../views/Explorar.vue'
import Actividades from '../views/Actividades.vue'
import Alojamientos from '../views/Alojamientos.vue'
import Contacto from '../views/Contacto.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/actividades',
      name: 'actitud',
      component: Actividades
    },
    {
      path: '/alojamientos',
      name: 'Alojamientos',
      component: Alojamientos
    },
    {
      path: '/explorar',
      name: 'Explorar',
      component: Explorar
    }
    
  ]
})

export default router
