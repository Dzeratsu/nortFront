<template>
  <div class="dpordown">
    <div class="dropdown-window" @click="this.isOpen">
      <div>{{this.$store.state.month[description]}}</div><div><img src="~/assets/arrow.svg" alt="" width="20px"></div>
    </div>
    <div class="dropdown-items" v-if="this.open" v-click-outside="this.isOpen">
      <p v-for="(item, index) in this.$store.state.month" @click="enter(index)">{{item}}</p>
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
      description: new Date().getMonth(),
      num: ''
    }
  },
  methods: {
    isOpen(){
      this.open = !this.open
    },
    enter(payload) {
      this.num = payload
      this.description = this.num
      this.open = !this.open
      this.$emit("mounth", {mounth: payload})
      this.$store.commit('addMounthTable', payload)
    }
  },
  mounted() {
    this.$store.commit('addMounthTable', this.description)
  }
}
</script>

<style scoped>

</style>
