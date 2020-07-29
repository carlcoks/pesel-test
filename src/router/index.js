import Vue from 'vue'
import Router from 'vue-router'

const IndexPage = () => import('../pages/Index')

Vue.use(Router)

export default new Router({
  mode: 'history',
  fallback: false,
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    }
  ]
})
