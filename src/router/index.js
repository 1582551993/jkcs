import Vue from 'vue'
import Router from 'vue-router'
import Sy from '@/components/Sy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sy',
      component: Sy
    }
  ]
})
