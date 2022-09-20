import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioCadastro from './components/usuario/UsuarioCadastro'
import VisitasDiarias from './components/usuario/VisitasDiarias'
import ListaDeVisitas from './components/usuario/ListaDeVisitas'
import CadastroAgente from './components/usuario/CadastroAgente'
import Cadastros from './components/usuario/Cadastros'
import Calendario from './components/usuario/Calendario'
import Visita from './components/usuario/Visita'

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
    path: '/',
    //component: Inicio
    components: {
      default: Inicio,
      menu: Menu
    }
  },
  {
    path: '/cadastro',
    component: UsuarioCadastro,
    props: false
  },
  {
    path: '/cadastros',
    component: Cadastros,
    props: false
    
  },
  {
    path: '/calendario',
    component: Calendario,
    props: false
  },
  {
    path: '/cadastroAgente',
    component: CadastroAgente,
    props: false
  },
  {
    path: '/usuario',
    component: Usuario,
    props: true,
    children: [
      { path: '', component: UsuarioLista },
      {
        path: ':id', component: UsuarioDetalhe, name: 'usuario', props: true,

        beforeEnter: (to, from, next) => {
          next()
        }
      },
      {
        path: ':id/editar', component: UsuarioEditar, props: true,
        name: 'editarUsuario'
      },
    ]
  },
  {
    path: '/visitas',
    component: VisitasDiarias,
    props: true,
    children: [
      { path: '', component: ListaDeVisitas },
      {
        path: ':id', component: Visita, name: 'visita', props: true,

        beforeEnter: (to, from, next) => {
          next()
        }
      }
    ]
  }, {
    path: '/*',
    redirect: '/'
  }]
})

router.beforeEach((to, from, next) => {

  next()
  /*if(to.path !== './usuario'){
    next('./usuario')
  }else{
    next()
  }*/
})
export default router
