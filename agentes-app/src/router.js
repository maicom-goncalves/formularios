import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Pagina from './components/pages/Pagina'
import Menu from './components/template/Menu'
import Agente from './components/pages/Agente'
import Visita from './components/pages/Visita'
import Visitas from './components/pages/Visitas'
import Dia from './components/pages/Dia'
import Error from './components/pages/Error'
//import Lista from './components/pages/Lista'
//import Login from './Login'

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
      components:{
        default:Inicio,
        menu:Menu,
      }
  },
  {
    name:'pagina',
    path:'/pagina',
    component:Pagina,
    props:true,
    children:[
      {path:':id',component:Visita,name:'visita',props:true,
      
        beforeEnter:(to,from,next) =>{
          next()
        }}
  ]
},{
  path:'/visitas',
    component:Visitas,
    props:false
},
{
  path:'/dia',
    component:Dia,
    props:false
},
{
  path:'/agente',
    component:Agente,
    props:false
},
{
  path:'/error',
    component:Error,
    props:false
},{
    path:'/*',
    redirect:'/error'
  }]
})

router.beforeEach((to,from,next) =>{

next()
/*if(to.path !== './Lista'){
  next('./Lista')
}else{
  next()
}*/
})
export default router