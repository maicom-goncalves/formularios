import Vue from 'vue'
import Router from 'vue-router'
import ListaMoradores from './components/ListaMoradores'
import UsuarioDetalhe from './components/formularios/UsuarioDetalhe'

import App from './App'

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
        name:'app',
        path:'/',
        
        components:{
          default:App,
          app:App
        }
    },{
        path:'/formularios',
        component:ListaMoradores,
        props:true,
        children:[
            {path:'',component:UsuarioDetalhe},
            {path:':key/usuarioDetalhe',component:UsuarioDetalhe ,props:true,
            name:'usuarioDetalhe'},
        ]
    },{
      path:'/*',
      redirect:'/'
    }]
})

router.beforeEach((to,from,next) =>{
  console.log('antes das rotas -> global')
  /*if(to.path !== './usuario'){
    next('./usuario')
  }else{
    next()
  }*/
  next()
})
export default router
