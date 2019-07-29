import Vue from 'vue'
import Router from 'vue-router'
import MainSiteContainer from '@/components/MainSiteContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainSiteContainer,
      children: [
        {
          path: '',
          component: () => import('@/views/FrontPage')
        },
        {
          path: 'inventory',
          component: () => import('@/views/Inventory'),
        },
        {
          name: 'vehicle',
          path: 'inventory/:id',
          component: () => import('@/views/VehiclePage')
        },
        {
          path: 'about',
          component: () => import('@/views/About')
        }
      ]
    }
  ]
})
