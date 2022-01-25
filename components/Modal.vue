<template>
  <transition name="modal-fade">
<div class="modal-backdrop">
<div class="modal">
  <header class="modal-header">
<slot name="header">
  <h1>Добавление нового заказа</h1>
  <button
    type="button"
    class="btn-close"
    @click="close"
  >
    x
  </button>
</slot>
  </header>
  <section class="modal-body">
  <slot name="body">
    I'm the default body!
  </slot>
  </section>
</div>
</div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  }
}
</script>

<style scoped>
h1{
  font-size: 25px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

}
.modal {
  min-width: 800px;
  min-height: 600px;
  background: #FFFFFF;
  box-shadow: 10px 5px 45px black;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: solid 1px #fac22e;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #fac22e;
  justify-content: space-between;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: black;
  justify-content: space-between;
  padding: 15px;
  display: flex;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close {
  border: none;
  font-size: 25px;
  cursor: pointer;
  font-weight: bold;
  color: #fac22e;

}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}
</style>
