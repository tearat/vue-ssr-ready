// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Предположим, что у нас есть универсальный API,
// который возвращает Promises и опустим детали реализации
import { fetchItem } from './api'

export function createStore () {
  return new Vuex.Store({
    // ВАЖНО: состояние должно быть функцией,
    // чтобы модуль мог инстанцироваться несколько раз
    state: () => ({
      items: {}
    }),

    actions: {
      fetchItem ({ commit }, id) {
        // возвращаем Promise через `store.dispatch()`
        // чтобы могли определять когда данные будут загружены
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      }
    },

    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
}
