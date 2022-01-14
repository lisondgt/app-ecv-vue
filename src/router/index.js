import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Utilisateurs from '../views/Utilisateurs.vue'
import Posts from '../views/Posts.vue'
import Photos from '../views/Photos.vue'
import Stepper from '../views/Stepper.vue'
import Administration from '../views/Utilisateurs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/utilisateurs',
    name: 'Utilisateurs',
    component: Utilisateurs
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/stepper',
    name: 'Stepper',
    component: Stepper
  },
  {
    path: '/administration',
    name: 'Administration',
    component: Administration
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
