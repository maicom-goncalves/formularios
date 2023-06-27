import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Login from './Login'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioLista from './components/moradores/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioCadastro from './components/cadastros/UsuarioCadastro'
import paginaVisita from './components/visitas/paginaVisita'
import listaAldeia from './components/moradores/listaAldeia'
import listaCasas from './components/moradores/listaCasas'
import visitasAldeia from './components/visitas/visitasAldeia'
import PaginaCadastro from './components/cadastros/Pagina'
import Cadastrar from './components/cadastros/Cadastrar'
import CadastroAgente from './components/cadastros/CadastroAgente'
import CadastroArea from './components/cadastros/CadastroArea'
import cadastrarCasa from './components/cadastros/cadastrarCasa'
import Cadastros from './components/cadastros/Cadastros'
import Pagina from './components/pages/Pagina'
import Aldeias from './components/pages/Aldeias'
import Casa from './components/pages/Casa'
import Morador from './components/pages/Morador'
import Teste from './components/usuario/Teste'
import Dia from './components/usuario/Dia'
import listaDeVisitas from './components/visitas/ListaDeVisitas'
import Visita from './components/visitas/Visita'

Vue.use(Router)

const router = new Router({

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
  },
  routes: [{
    name: 'inicio',
    path: '/inicio',
    components: {
      default: Inicio,
      menu: Menu
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cadastros',
    component: Cadastros,
    props: false
  },
  {
    path: '/cadastroArea',
    component: CadastroArea,
    props: false
  },
  {
    path: '/teste',
    component: Teste,
    props: false
  },
  {
    path: '/cadastroAgente',
    component: CadastroAgente,
    props: false
  },
  {
    path: '/dia',
    component: Dia,
    props: false
  },
  {
    path: '/usuario',
    component: Usuario,
    props: true,
    children: [
      { path: '', component: listaAldeia },
      {
        path: ':id', component: listaCasas, name: 'usuario', props: true,
        beforeEnter: (to, from, next) => {
          next()
        }
      },
      {
        path: ':id/:id2', component: UsuarioLista, name: 'UsuarioLista', props: true
      },
      {
        path: ':id/:id2/:id3', component: UsuarioDetalhe, name: 'usuarioDetalhe', props: true
      },
      {
        path: ':id/:id2/:id3/editar', component: UsuarioEditar, props: true,
        name: 'editarUsuario'
      },
    ]
  },
  {
    path: '/cadastro',
    component: PaginaCadastro,
    props: true,
    children: [
      { path: '', component: Cadastrar },
      {
        path: ':id/:id2', component: cadastrarCasa, name: 'cadastro', props: true,
        beforeEnter: (to, from, next) => { next() }
      },
      {
        path: ':id/:id2', component: UsuarioCadastro, name: 'UsuarioCadastro', props: true
      },
    ]
  },
  {
    path: '/pagina',
    component: Pagina,
    props: true,
    children: [
      { path: '', component: Aldeias },
      {
        path: ':id', component: Casa, name: 'pagina', props: true,
        beforeEnter: (to, from, next) => {
          next()
        }
      },
      {
        path: ':id/morador', component: Morador, props: true,
        name: 'morador'
      },
    ]
  },
  {
    path: '/paginaVisita',
    component: paginaVisita,
    props: true,
    children: [
      { path: '', component: visitasAldeia },
      {
        path: ':id', component: listaDeVisitas , name: 'listaDeVisitas', props: true,
        beforeEnter: (to, from, next) => {
          next()
        }
      },
      {
        path: ':id/visita', component: Visita, props: true,
        name: 'visita'
      },
    ]
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/inicio'
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

  /* next()
   if(to.path !== './usuario'){
     next('./usuario')
   }else{
     next()
   }*/
})
export default router
