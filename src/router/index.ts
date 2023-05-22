import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import { routes } from './router.ts'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  }
} as RouterOptions)

export default router