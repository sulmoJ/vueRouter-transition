import Vue from 'vue'
import Router from 'vue-router'
import Basket from './views/Basket.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
    //main 라우팅
    {
      path: '/',
      name: 'mainPage',
      component: () => import('./views/MainPage.vue'),
    },

    //navbar 라우팅
    {
      path: '/basket',
      name: 'basket',
      component: Basket,
    },
    {
      path: '/purchase',
      name: 'purchase',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Purchase.vue'),
    },
    {
      path: '/review',
      name: 'review',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Review.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-spli  tting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
    },

    //프로필 내부 라우팅
    {
      path:'/profile/editProfile',
      name: 'editProfile',
      component:() => import('./views/profileView/editProfile.vue'),
      meta:{transitionName: 'slide'},
    },
    {
      path:'/profile/editprofile/withdrawal',
      name: 'withdrawal',
      component:() => import('./views/profileView/withdrawal.vue'),
      meta: {transitionName: 'slide'}
    },

    
  ]
})
