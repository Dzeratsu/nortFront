<template>
  <div>
<div class="table-item" v-bind:class="{notReadClass: readOrders}">
  <div class="id">{{item.id}}</div>
  <div class="date" v-if="item.date">{{timeMask()}}</div>
  <div class="name">{{item.name}}</div>
  <div class="source">{{this.$store.state.statusSource[item.source]}}</div>
  <div class="phone">{{item.phone}}</div>
  <div class="city">{{item.sity}}</div>
  <div class="status">{{this.$store.state.statusOrders[item.status]}}</div>
</div>
</div>
</template>

<script>
export default {
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
      return timeOrders.getDate() + ":" + timeOrders.getMonth()+1 + ":" + timeOrders.getFullYear()
    }
  },
}
</script>

<style scoped>
.notReadClass {
  background-color:#e03f2d;
}
</style>
