import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/itemMusic',
    name:'itemMusic',
    component:()=>import('../views/itemMusic.vue')
  },
  {
    path:'/search',
    name:'Search',
    component:()=>import('../views/SearchMusic.vue')
  },
  {
    path:'/UserLogin',
    name:'UserLogin',
    component:()=>import('../views/UserLogin.vue')
  },
  {
    path:'/InforUser',
    name:'InforUser',
    beforeEnter:(to,from,next)=>{
      if(store.state.isLogin ){
        next()
      }else{
        next('/UserLogin')
      }
    },
    component:()=>import('../views/InforUser.vue'),
    
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  if(to.path == "/UserLogin"){
   store.state.isfootMusic=false
  }else{
    store.state.isfootMusic=true
  }
})
export default router
