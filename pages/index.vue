<template>
<div class="wrapper">
  <h1>Сделано на 12.02.2022</h1>
  <ul>
    <li>-Регистрация</li>
    <li>-Авторизация</li>
    <li>-Загрузка всех заказов менеджера</li>
    <li>-Добавлено создание ID заказа</li>
  </ul>
</div>
</template>

<script>
import Modal from "../components/Modal";
import AddOrdersModals from "../components/typeModals/addOrdersModals";
export default {
  components: {AddOrdersModals, Modal},
  data(){
    return {
    }
  },
}
</script>
<style>

</style>
