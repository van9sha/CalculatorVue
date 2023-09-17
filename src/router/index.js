import { createRouter, createWebHistory } from 'vue-router'
import Calculator from "@/pages/Calculator.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Calculator
    },

  ]
})

export default router
