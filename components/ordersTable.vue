<template>
  <div class="order">
Ордер
  </div>
</template>

<script>
export default {
  name: "ordersTable"
}
</script>

<style scoped>
.order{
  margin: 0;
  padding: 0;
  min-height: 300px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 10px 5px 45px black;
  width: 100%;
}
.grid-table{
  display: grid;
  width: 100%;
  border: solid #5B6DCD 10px;
}
.title-table {
  width: 100%;
  border: solid #5B6DCD 10px;
  padding: 5px;
  height: 40px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #fac22e;
  display: grid;
  grid-template-columns: 50px 200px 200px 200px 200px 340px
}
</style>
