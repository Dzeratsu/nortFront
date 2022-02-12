<template>
  <div class="order">
    <div class="table-head">
      <div class="idHead id">№</div>
      <div class="dateHead date">Дата</div>
      <div class="nameHead name">Имя</div>
      <div class="sourceHead source">Источник</div>
      <div class="phoneHead phone">Телефон</div>
      <div class="cityHead city">Город</div>
      <div class="statusHead status ">Статус</div>
    </div>
    <table-items v-for="orderItem in getOrders" v-bind:item="orderItem" :key="orderItem.id"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TableItems from "./tableItem";
export default {
  name: "ordersTable",
  components: {TableItems},
  computed: {
      ...mapGetters(['getOrders'])
    }
}
</script>
<style scoped>
.order{
  margin-top: 50px;
  color: black;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 10px 5px 45px black;
  width: 100%;
}

</style>
