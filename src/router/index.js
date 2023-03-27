// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Menu/inicio.vue'),
    children: [
      {
        path: '/inicio',
        name: 'Inicio',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Menu/inicio.vue'),
      },
    ],
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
