import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Explorar from '../views/Explorar.vue'
import Actividades from '../views/Actividades.vue'
import Alojamientos from '../views/Alojamientos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/explorar',
      name: 'explorar',
      component: Explorar
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
    }
    
  ]
})

export default router
