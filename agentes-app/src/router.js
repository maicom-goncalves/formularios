import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Inicio from './components/Inicio'
import Pagina from './components/pages/Pagina'
import Menu from './components/template/Menu'
import Agente from './components/pages/Agente'
import Visitas from './components/pages/Visitas'
import ListaAgentes from './components/pages/ListaAgentes'
import Casas from './components/pages/Casas'
import Moradores from './components/pages/Moradores'
import Error from './components/pages/Error'
import Agenda from './components/pages/Agenda'
import Login from './Login'

Vue.use(Router)

const router = new Router({
  /*
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else if (to.hash) {
      return { selector: to.hash }
    }
    else {
      return { x: 0, y: 0 }
    }
  },*/
  routes: [
    {
      name: 'inicio',
      path: '/inicio',
      component:Inicio,
      components: {
        default: Inicio,
        menu: Menu,
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'pagina',
      path: '/pagina',
      component: Pagina,
      props: true,
      children: [
        { path: '', component: ListaAgentes},
        {
          path: ':id', component: Casas, name: 'casas', props: true,
          beforeEnter: (to, from, next) => {
            next()
          }
        },
        {path: ':id/:id2', component: Moradores, props: true,
         name: 'moradores'},
        {path: ':id/:id2/:id3', component: Agenda, props: true,
         name: 'agenda'}
      ]
    }
    , {
      path: '/visitas',
      component: Visitas,
      props: false
    },
    {
      path: '/agente',
      component: Agente,
      props: false
    },
    {
      path: '/agenda',
      component: Agenda,
      props: false
    },
    {
      path: '/error',
      component: Error,
      props: false
    }, 
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next();
  else next();
});


export default router