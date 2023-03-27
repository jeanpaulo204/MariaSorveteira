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
  {
    path: '/',
    component: () => import('@/views/Menu/estoque.vue'),
    children: [
      {
        path: '/estoque',
        name: 'Estoque',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Menu/estoque.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
