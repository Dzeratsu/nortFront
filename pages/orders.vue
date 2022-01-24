<template>
<div> {{info}}
Страница с заказами1
  {{this.$store.state.orders}}
  <orders-table/>
</div>
</template>

<script>
import OrdersTable from "../components/ordersTable";
export default {
/*  middleware: 'auth',*/
  name: "orders",
  components: {OrdersTable},
  data() {
    return {
      info: '',
    }
  },
  beforeCreate() {
    this.$store.dispatch('loadOrders')
  }
}
</script>

<style scoped>

</style>
