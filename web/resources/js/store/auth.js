const state = {
  user: null
}

const getters = {
  // check・・・中身が有ったらtrue、なければfalseを返す。
  check: state => !! state.user,
  // username・・・state.user内が有ったら(trueの場合)state.user.nameを返す。falseの場合なら空文字を返す。
  username: state => state.user ? state.user.name : ''
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  async register (context, data) {
    //一行目でaxiosを使い、api.phpからのリクエストを受け取っている。
    const response = await axios.post('/api/register', data)
    //上のリクエストをミューテーション内のsetUserを使い、送信している。
    context.commit('setUser', response.data)},
  async login (context, data) {
    const response = await axios.post('/api/login', data)
    context.commit('setUser', response.data)},
  async logout (context) {
      const response = await axios.post('/api/logout')
      context.commit('setUser', null)},
  async currentUser (context) {
      //ログインチェック用アクション
      const response = await axios.get('/api/user')
      //ユーザー情報がある場合は(response.data)を返す。無い場合はnullを返す。
      const user = response.data || null
      //その後ミューテーションを通してユーザー情報を更新。
      context.commit('setUser', user)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
