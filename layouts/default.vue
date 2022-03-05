<template>
  <div>
 <div class="head">
   <div>
     <nuxt-link to="/"><img :src="require('~/assets/logo.png')" alt="«НПО НОРТ»"></nuxt-link>
   </div>
   <div v-if="this.$auth.loggedIn">
    <button class="sign" @click="$refs.modal.showModal = true">Создать заказ</button>
   </div>
   <div v-if="this.$auth.loggedIn">
     <nuxt-link to="/orders"><button class="sign" :disabled="notOrders">Вход в систему</button></nuxt-link>
   </div>
   <div style="padding-right: 50px" v-if="!this.$auth.loggedIn">
    <nuxt-link to="/login">Авторизация</nuxt-link>
     /
     <nuxt-link to="/registration">Регистрация</nuxt-link>
   </div>
   <div style="padding-right: 50px; text-align: center" v-if="this.$auth.loggedIn">
     <p>Аккаунт: {{this.$auth.user}}</p>
     <p @click="exit" class="exit">Выход</p>
   </div>
 </div>

  <Nuxt  class="wrapper"/>

<div class="foot">
  <div class="footNort">«НПО НОРТ»</div>
  <div class="footNort">1993 - {{year}}</div>
</div>
    <add-orders-modals ref="modal"></add-orders-modals>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import AddOrdersModals from "../components/typeModals/addOrdersModals";
export default {
  name: "default",
  components: {AddOrdersModals, Modal},
  data(){
    return {
      year: new Date().getFullYear(),
      page: false
    }
  },
  methods: {
    exit(){
      this.$auth.logout()
    }
  },
  computed:{
    notOrders() {
     return this.$nuxt.$route.name === 'orders' ? true : false
    }
  }
}
</script>

<style scoped>
.sign{
  color: black;
  width: 250px;
  height: 50px;
  background: #fac22e;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  background-color: rgb(0, 0, 0, 0.5);
  border-bottom: solid 2px #fac22e ;
  box-shadow: 10px 5px 45px black;
}
.foot{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: rgb(0, 0, 0, 0.5);
  box-shadow: 10px 5px 45px black;
  border-top: solid 2px #fac22e;
}
.footNort{
  padding-top: 10px;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
}
img{
  padding-left: 50px;
}
.exit {
  cursor: pointer;
  text-decoration: underline;
}
button:disabled {
  background-color: #666666;
}
</style>
