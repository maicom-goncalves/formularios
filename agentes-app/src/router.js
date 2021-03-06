import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Pagina from './components/pages/Pagina'
import Menu from './components/template/Menu'
import Visita from './components/pages/Visita'
import Visitas from './components/pages/Visitas'
import Lista from './components/pages/Lista'
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
        menu:Menu
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
  path:'/lista',
    component:Lista,
    props:false
},{
    path:'/*',
    redirect:'/'
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