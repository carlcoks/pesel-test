import Vue from 'vue'
import Router from 'vue-router'

const IndexPage = () => import('../pages/Index')
const CurrentBreed = () => import('../pages/current-breed')
const Favorites = () => import('../pages/favorites')

Vue.use(Router)

export default new Router({
  mode: 'history',
  fallback: false,
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/:breed',
      name: 'breed',
      component: CurrentBreed
    }
  ]
})
