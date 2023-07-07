import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import Contact from '../views/Contact.vue'

const routes = [
    { path: '/', name: 'Home', component: Home ,meta: { requiresAuth: true }},
    { path: '/login', name: 'Login', component: Login },
    { path: '/menu', name: 'Menu', component: Menu },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach(async (to, from) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !auth.isLoggedIn()) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      const canAccess = await canUserAccess(to)
      if (!canAccess) return '/login'
      return {
        path: '/login',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  })
export default router