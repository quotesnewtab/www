import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "notfound" */ './views/404.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/api/docs',
      name: 'api',
      component: () => import(/* webpackChunkName: "api" */ './views/API.vue')
    },
    {
      path: '/features',
      name: 'features',
      component: () => import(/* webpackChunkName: "features" */ './views/Features.vue')
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: () => import(/* webpackChunkName: "quotes" */ './views/Quotes.vue')
    },
    {
      path: '/quotes/:id',
      name: 'quote',
      component: () => import(/* webpackChunkName: "quotes" */ './views/Quote.vue')
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import(/* webpackChunkName: "submit" */ './views/Submit.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import(/* webpackChunkName: "support" */ './views/Support.vue')
    },
    {
      path: '/support/banned',
      name: 'banned',
      component: () => import(/* webpackChunkName: "banned" */ './views/Banned.vue')
    }
  ]
})
