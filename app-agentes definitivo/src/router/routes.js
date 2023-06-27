//import { createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Auth.vue') },
      { path: '/home', component: () => import('pages/Home.vue'), meta: {requiresAuth: true} },
      //{ path: '/pagina/:id', component: () => import('pages/Pagina.vue'), meta: {requiresAuth: true} }
      { path: '/formulario/:id', component: () => import('pages/Formulario.vue'), meta: {requiresAuth: true} }
      
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
