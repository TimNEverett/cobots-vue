import { createApp } from '/node_modules/.vite/vue.js?v=87a41d6f'
import '/src/tailwind.css?t=1645391610788'
import App from '/src/App.vue?t=1645391132712'
import { routes } from '/src/routes.js?t=1645391610788'
import { createRouter, createWebHistory } from '/node_modules/.vite/vue-router.js?v=87a41d6f'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
