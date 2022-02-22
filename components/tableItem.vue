<template>
  <div>
<div class="table-item" v-bind:class="{notReadClass: readOrders}" @click="$refs.modal.showModal = true, readOrder(item._id)">
  <div class="id">{{item.id}}</div>
  <div class="date" v-if="item.date">{{timeMask()}}</div>
  <div class="name">{{item.name}}</div>
  <div class="source">{{this.$store.state.statusSource[item.source]}}</div>
  <div class="phone">{{item.phone}}</div>
  <div class="city">{{item.sity}}</div>
  <div class="status">{{this.$store.state.statusOrders[item.status]}}</div>
</div>
    <edit-orders-modal ref="modal" v-bind:item="item"></edit-orders-modal>
</div>
</template>

<script>
import Modal from "../components/Modal";
import EditOrdersModal from "@/components/typeModals/editOrdersModal";
export default {
  components: {EditOrdersModal, Modal},
  props: ['item'],
  name: "tableItems",
  data() {
    return{
    }
  },
  computed: {
    readOrders(){
      return this.item.read == 0 ? true : false
    },
  },
  methods:{
    timeMask(){
      let timeOrders = new Date(this.item.date)
      let mounth = timeOrders.getMonth() + 1
      if (mounth < 10){
        mounth = '0'+ mounth
      }
      return timeOrders.getDate() + ":" + mounth + ":" + timeOrders.getFullYear()
    },
    readOrder(id){
      this.$store.dispatch('read', id)
    }
  },
}
</script>

<style scoped>
.notReadClass {
  background-color:#fff4d1;
}
</style>
