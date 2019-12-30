import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homepage from '@/components/homePage/index'
import professorindex from '@/components/professorInformation/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/professorindex',
      name: 'professorindex',
      component: professorindex
    }
  ]
})
