import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const constantRoutes: RouteRecordRaw[] = [ {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }]
const { VITE_ROUTE_HASH = '1' } = import.meta.env
const router = createRouter({
  history: VITE_ROUTE_HASH === '1' ? createWebHashHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior: ()=> ({ left: 0, top: 0 })
})

export default router
