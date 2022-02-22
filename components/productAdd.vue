<template>
  <div>
    <div class="addProductHeader"><p> Выберите продукт в заявке:</p>  <button @click="addProduct" style="margin-left: 20px">+</button></div>
<div class="product" v-for="(item, index) in product">
  <div class="oneLine">
    <div><dropdown-product v-bind:text="[allProduct, 'Выберите состав', index]" @product="addProductId"/></div>
    <div><input type="number" placeholder="0" value="0" v-model="product[index].weight">кг</div>
    <div v-if="numOne"><button style="color: red" @click="deleteProduct(index)">—</button></div>
</div>
</div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
import DropdownProduct from "@/components/dropdownUI/dropdownProduct";
export default {
  name: "productAdd",
  components: {DropdownProduct},
  data(){
    return{
      numOne: false,
      product:[],
    }
  },
  computed: {
    ...mapGetters(['allProduct'])
  },
  methods: {
    addProduct(index){
      this.product.push({id:'', weight: ''})
      this.numOne = true
    },
    deleteProduct(index){
      this.product.slice(index, 1)
    },
    addProductId(payload){
      this.product[payload.index].id = payload.product
    }
  },
  watch: {
    product(){
      this.$emit('addObjectProduct',{product: this.product})
    }
  }
}
</script>

<style scoped>
.addProductHeader{
  display: flex;
  align-items: center;
}
.product{
  position: relative;
}
.oneLine{
  display: flex;
  align-items: center;
}
.oneLine div {
  padding-top: 5px;
  padding-right: 10px;
}
input{
  padding-left: 15px;
  font-size: 20px;
  border-bottom: 2px solid #fac22e;
  width: 80px;
  height: 30px;
  color: black;
  box-shadow: none;
  outline:none;
}
button {
  width: 30px;
  height: 30px;
  font-size: 25px;
  box-shadow: 5px 5px 30px rgb(0, 0, 0, 0.3);
  border-radius: 5px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button
{-webkit-appearance: none;}
</style>
