import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('../views/home')
    },
    {
      path: '/detail',
      component: ()=>import('../views/detail')
    },
    {
      path: '/add',
      component: ()=>import('../views/add')
    },
    {
      path:'*',
      redirect:{
        path:'/',
        component: ()=>import('../views/home')

      }
      // component: ()=>import('../views/err')

    }
  ]
})
