<template>
  <div style="padding-top: 100px">
    <div class="card">
      <h1>Регистрация</h1>
      <p>Ваш логин для авторизации <button class="helper" disabled data-title="Логин будет сформирован после ввода вашей электронной почты и будет являться логином для входа">?
      </button> : <span class="login">{{login}}</span></p>
      <div class="reg">
      <div>
        <p>E-mail</p>
        <input v-model="email" type="email" v-on:blur="readyLogin">
        <p>Фамилия Имя Отчество</p>
        <input v-model="FIO" type="text"/>
      </div>
      <div style="padding-left: 45px">
        <p>Введите пароль</p>
        <input type="password" v-model="password" v-on:blur="symbols"/>
        <p>Введите пароль повторно</p>
        <input type="password" v-model="password2" v-on:blur="repeatPassword">
     </div>

    </div>
<button @click="reg" :disabled="validation">Регистрация</button>
  </div>
    <div class="alert">
      <v-alert
        v-model="warningSymbol"
        color="#ff8624"
        dismissible
        type="warning"
      >Пароль должен быть больше 5 символов</v-alert>
      <v-alert
        v-model="warningRepeatPassword"
        color="#ff8624"
        dismissible
        type="warning"
      >Введенные пароли не совпадают</v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration",
  data () {
    return {
      login: '',
      email: '',
      FIO: '',
      password: '',
      password2: '',
      warningSymbol: false,
      warningRepeatPassword: false,
      check: false
    }
  },
  computed: {
    validation: function (){
      if(this.email !== '' && this.FIO !== '' && this.password !== '' && this.password2 !== ''){
        return false
      }else {
        return true
      }
    }
  },
  methods: {
    readyLogin(){
      this.login = this.email.split('@')[0].toLowerCase()
    },
    symbols(){
      if(this.password.length < 6){
      this.warningSymbol = true
      } else {
        this.warningSymbol = false
      }
    },
    repeatPassword(){
      if(this.password !== this.password2){
        this.warningRepeatPassword = true
      }else{
        this.warningRepeatPassword = false
      }
    },
    async reg(){
      let object = {
        email: this.email,
        FIO: this.FIO,
        password: this.password
      }
      let resp = await this.$axios.$post('/api/reg', object)
      console.log(resp)
    }
  }
}
</script>

<style scoped>
.alert{
  padding-top: 15px;
  margin: 0 auto;
  width: 600px;
  min-height: 40px;
}
.card{
  padding: 15px;
  margin: 0 auto;
  width: 600px;
  height: 400px;
  background-color: rgb(0, 0, 0, 0.5);
  border: solid 1px #fac22e;
  border-radius: 10px;
  box-shadow: 10px 5px 45px black;
}
.reg{
  display: flex;
}
.helper{
  display: inline-block; /* Строчно-блочный элемент */
  position: relative; /* Относительное позиционирование */
  margin: 0 auto;
  width: 18px;
  height: 18px;
  border-radius: 50px;
}
.helper:hover::after{
  font-family: "Roboto Light";
  width: 360px;
  content: attr(data-title);
  position: absolute;
  top: -90%;
  z-index: 1;
  background: rgb(0, 0, 0, 0.5);
  font-size: 17px;
  padding: 5px 10px;
  color: white;
  border: 1px solid #fac22e;
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
  margin-left: 155px;
  color: black;
  margin-top: 45px;
  background: #fac22e;
  width: 260px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 10px 5px 45px black;
}
button:disabled{
  background-color: #666666;
  color: white;
}
.login {
  color: white;
  font-size: 25px;
  text-decoration: underline;
}
</style>
