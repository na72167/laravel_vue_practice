import './bootstrap'
import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
import store from './store' // ★　追加
// ルートコンポーネントをインポートする
import App from './App.vue'

const createApp = async () => {
  //アプリ起動時にアクションを走らせる。
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router, // ルーティングの定義を読み込む
    store,
    components: { App }, // ルートコンポーネントの使用を宣言する
    template: '<App />' // ルートコンポーネントを描画する
  })
}

createApp()
