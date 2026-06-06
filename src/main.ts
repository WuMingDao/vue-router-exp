
import { createApp } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import App from './App.vue'
import { router } from './router'

declare module 'vue-router' {
  export interface TypesConfig {
    Router: typeof router
  }
}

const app = createApp(App)
app.component('RouterLink', RouterLink)
app.component('RouterView', RouterView)
app.use(router)

app.mount('#app')
