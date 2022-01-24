<template>
  <div>
    <div>
    <input v-model="login">
    <input v-model="password">
    <button @click="go">го</button>
    </div>
    <div>
      <input v-model="regLogin">
      <input v-model="regPassword">
      <input v-model="regEmail">
      <button @click="reg">го</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      login: '',
      password: '',
      regLogin: '',
      regPassword: '',
      regEmail: ''
    }
  },
  methods: {
     go(){
      let obj = {
        "login": this.login,
        "password": this.password,
      }
      this.$axios.post('http://localhost:1488/api/auth', obj)
    },
    reg(){
       let regObj = {
         "login": this.regLogin,
         "password": this.regPassword,
         "email": this.regEmail
       }
    this.$axios.post('http://localhost:1488/api/reg', regObj)
    }
  }
}
</script>

<style scoped>

</style>
