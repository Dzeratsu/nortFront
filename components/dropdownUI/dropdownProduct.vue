<template>
  <div class="dpordown">
    <div class="dropdown-window" @click="this.isOpen">
      <div>{{description}}</div><div><img src="~/assets/arrow.svg" alt="" width="20px"></div>
    </div>
    <div class="dropdown-items" v-if="this.open" v-click-outside="this.isOpen">
      <p v-for="(item, index) in text[0]" @click="enter(index)">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  name: "dropdownProduct",
  data() {
    return {
      open: false,
      description: this.text[1],
      num: ''
    }
  },
  methods: {
    isOpen(){
      this.open = !this.open
    },
    enter(payload) {
      this.num = payload
      this.description = this.text[0][this.num]
      this.open = !this.open
      this.$emit('product',{product: payload, index: this.text[2]})
    },
    childUpdate(id){
      console.log('123')
    this.description = this.text[0][id]
    }
  }
}
</script>

<style scoped>
.dropdown-window{
  color: black;
  position: relative;
  display: flex;
  width: 260px;
  height: 30px;
  padding: 2px 15px 2px 15px;
  background: #ffffff;
  -webkit-filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  justify-content: space-between;
  align-items: center;
}
.dropdown-items{
  color: black;
  position: absolute;
  z-index: 9999;
  left: 0;
  max-height: 150px;
  width: 260px;
  padding: 2px 2px 2px 15px;
  background: #fff;
  -webkit-filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  border: 1px solid #fac22e;
  overflow: auto;
}
</style>
