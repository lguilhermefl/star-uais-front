import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import { readExpiry } from '../helpers/localstorage-helper'
import { refreshToken } from '@/services/api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingView
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundRedirect',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach(async (to, _, next) => {
  const protectedRouteNames = ['Home', 'Users']
  const unprotectedRouteNames = ['Landing', 'NotFound']
  const toRouteName = to.name?.toString()
  if (toRouteName) {
    // For Protected Routes
    if (protectedRouteNames.includes(toRouteName)) {
      try {
        const token = readExpiry('access_token')
        // if token is available and not expired
        if (token.response != null && token.expired === false) {
          return next()
        }

        // if token is available and expired
        if (token.response != null && token.expired === true) {
          // attempt to refresh token
          await refreshToken()
          return next()
        }
        // if token is unavailable
        if (token == null || token.response == null) {
          return next({ name: 'Landing' })
        }
      } catch (e) {
        return next({ name: 'Landing' })
      }
    }

    // Unprotected Routes
    if (unprotectedRouteNames.includes(toRouteName)) {
      // redirects to Home if user is already logged in and tries to access Landing
      if (toRouteName === 'Landing') {
        try {
          const token = readExpiry('access_token')
          // if token is available and not expired
          if (token.response != null && token.expired === false) {
            return next({ name: 'Home' })
          }

          // if token is available and expired
          if (token.response != null && token.expired === true) {
            // attempt to refresh token
            await refreshToken()
            return next({ name: 'Home' })
          }
          // if token is unavailable
          if (token == null || token.response == null) {
            return next()
          }
        } catch (e) {
          return next()
        }
      }
      // allow through
      return next()
    }
    // Default Route Action
    return next()
  }
})

export default router
