// app.js
import Vue from 'vue'
import App from './components/App.vue'
import { createRouter } from './router/client'
import { createStore } from './store/store'
import { sync } from 'vuex-router-sync'

export function createApp (context) {

  const router = createRouter()
  const store = createStore()

  // Синхронизируем чтобы состояние маршрута было доступно как часть хранилища
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // возвращаем и приложение и маршрутизатор
  return { app, router, store }
}
