// app.js
import Vue from 'vue'
import App from './components/App.vue'
import { createRouter } from './router/client'

export function createApp (context) {
    
  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(App)
  })

  // возвращаем и приложение и маршрутизатор
  return { app, router }
}
