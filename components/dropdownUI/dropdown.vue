<!--Принимает в себя список выпадающего меню, плейсхолдер и название события-->
<template>
<div class="dropdown">
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
  name: "dropdown",
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
      this.$emit(`${this.text[2]}`,{payload: payload})
    }
  }
}
</script>

<style scoped>

</style>
