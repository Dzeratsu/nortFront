<template>
<div style="padding-top: 100px">
<div class="card">
  <h1 style="color:white;">Авторизация</h1>
  <p>Введите ваш логин</p>
  <input v-model="log.login"/>
  <p>Введите пароль</p>
  <input type="password" v-model="log.password">
  <button @click="auth" :disabled="this.validation">Вход</button>
</div>
  <div class="alert">
  <v-alert v-model="status"
           color="#32CD32"
           dismissible
           type="success"
  >Авторизация прошла успешно</v-alert>
</div>
</div>
</template>

<script>
export default {
  name: "autorization",
  data(){
    return {
      log: {
        login: '',
        password:''
      },
      status: false
    }
  },
  methods: {
    async auth(){
      try{
       let response = await this.$auth.loginWith('local', {data: this.log})
        this.$store.dispatch('acsess', response.data)
        this.$router.push('/orders')
      }
      catch (e){
      alert(e)
      }
    }
  },
  computed: {
    validation: function (){
      if(this.login !== '' && this.password !== ''){
       return false
      }else {
        return true
      }
    }
  }
}
</script>

<style scoped>
.alert{
  padding-top: 15px;
  margin: 0 auto;
  width: 300px;
  min-height: 40px;
}
v-alert {
  margin: 0 auto;
}
.card{
  padding: 15px;
  margin: 0 auto;
  width: 300px;
  height: 400px;
  background-color: rgb(0, 0, 0, 0.5);
  border: solid 1px #fac22e;
  border-radius: 10px;
  box-shadow: 10px 5px 45px black;
}
input{
  padding-left: 15px;
  font-size: 20px;
  border-bottom: 2px solid #fac22e;
  width: 260px;
  height: 40px;
  color: white;
  box-shadow: none;
  outline:none;
}

p{
  padding-top: 35px;
  color: #d1e0e0;
}
button {
  color: black;
  margin-top: 45px;
  background: #fac22e;
  width: 260px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 10px 5px 45px black;
}
button:disabled{
  background-color: #999999;
}

</style>
