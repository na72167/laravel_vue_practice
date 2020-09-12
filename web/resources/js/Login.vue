<template>
  <div class="panel" v-show="tab === 1">
  <form class="form" @submit.prevent="login">
    <!-- for・・・id属性とセットで使う。紐付いた部分はどちらを押してもアクティブ化される。 -->
    <!-- name属性はv-modelで代用する -->
    <label for="login-email">Email</label>
    <input type="text" class="form__item" id="login-email" v-model="loginForm.email">
    <label for="login-password">Password</label>
    <input type="password" class="form__item" id="login-password" v-model="loginForm.password">
    <div class="form__button">
      <button type="submit" class="button button--inverse">login</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      tab: 1,
      loginForm: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    login () {
      console.log(this.loginForm)
    }
  }
}
</script>
