import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import Home from './Home.vue'
import Login from './Login.vue'
import passEdit from './passEdit.vue'
import Register from './Register.vue'
import Remainder from './Remainder.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/passEdit',
    component: passEdit
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/Remainder',
    component: Remainder
  },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', // ★ 追加
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
