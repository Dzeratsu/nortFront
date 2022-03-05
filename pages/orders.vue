<template>
<div>
  <div class="dropdownMenu">
    <dropdownMonth @mounth="dataMounth"/>
    <dropdownAdminManager v-bind:text="this.$store.state.manager" @managerChange="dataManager" v-if="isAdmin"/>
  </div>
      <orders-table/>
</div>
</template>

<script>
import dropdownMonth from "@/components/dropdownUI/dropdownMonth";
import OrdersTable from "../components/ordersTable";
import dropdownAdminManager from "@/components/dropdownUI/dropdownAdminManager";
export default {
  middleware: 'auth',
  name: "orders",
  components: {dropdownAdminManager, OrdersTable, dropdownMonth},
  data() {
    return {
      info: '',
      mounth: new Date().getMonth(),
      manager: ''
    }
  },
  beforeCreate() {
    this.$store.dispatch('loadOrders')
    this.$store.dispatch('loadManager')
  },
  methods:{
    dataManager(payload){
      this.manager = payload.manager
    },
    dataMounth(payload){
      this.mounth = payload.mounth
      if(this.$store.state.userName !== 'admin'){
        this.$store.dispatch('loadOrders', this.mounth)
      }else{
        this.mounth = payload.mounth
      }
    }
  },
  watch: {
    manager(){
      let object = {
        mounth: this.mounth,
        manager: this.manager
      }
      this.$store.dispatch('loadOrderAdmin', object)
    },
    mounth(){
      if(this.manager !== ''){
        let object = {
          mounth: this.mounth,
          manager: this.manager
        }
        this.$store.dispatch('loadOrderAdmin', object)
      }
    }
  },
  computed: {
    isAdmin(){
      return this.$auth.user == 'admin' ? true : false
    }
  }
}
</script>

<style scoped>
.dropdownMenu{
  position: relative;
  display: flex;
}
.dropdownMenu div{
  padding-right: 25px;
}
</style>
