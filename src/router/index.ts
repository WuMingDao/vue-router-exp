import { createWebHistory } from 'vue-router'
import { experimental_createRouter as createRouter } from 'vue-router/experimental'
import { resolver, handleHotUpdate } from 'vue-router/auto-resolver'

export const router = createRouter({
  history: createWebHistory(),
  resolver,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}