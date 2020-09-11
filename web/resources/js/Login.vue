<template>
  <h1>LoginForm</h1>
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
