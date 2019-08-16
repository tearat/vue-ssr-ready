// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '@components/App.vue'
import Index from '@components/Index.vue'
import Gallery from '@components/Gallery.vue'
import About from '@components/About.vue'

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Index },
      { path: '/gallery', component: Gallery },
      { path: '/about', component: About },
    ]
  })
}
