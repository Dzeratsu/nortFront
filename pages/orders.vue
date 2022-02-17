<template>
<div>
  <dropdownMonth/>
  <orders-table/>
</div>
</template>

<script>
import OrdersTable from "../components/ordersTable";
export default {
  middleware: 'auth',
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
