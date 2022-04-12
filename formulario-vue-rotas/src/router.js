import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioCadastro from './components/usuario/UsuarioCadastro'

Vue.use(Router)

const router = new Router({
    mode:'history',
    scrollBehavior(to,from,savedPosition){
      if(savedPosition){
        return savedPosition
      }
      else if(to.hash){
        return{selector:to.hash}
      }
      else{
        return{x:0,y:0}
      }
    },
    routes:[{
        name:'inicio',
        path:'/',
        //component: Inicio
        components:{
          default:Inicio,
          menu:Menu
        }
    },
    {
      path:'/cadastro',
      component:UsuarioCadastro,
      props:false
  },{
        path:'/usuario',
        component:Usuario,
        props:true,
        children:[
            {path:'',component:UsuarioLista},
            {path:':id',component:UsuarioDetalhe,props:true,
              beforeEnter:(to,from,next) =>{
                next()
              }},
            {path:':id/editar',component:UsuarioEditar ,props:true,
            name:'editarUsuario'},
        ]
    },{
      path:'/*',
      redirect:'/'
    }]
})

router.beforeEach((to,from,next) =>{

  next()
  /*if(to.path !== './usuario'){
    next('./usuario')
  }else{
    next()
  }*/
})
export default router
