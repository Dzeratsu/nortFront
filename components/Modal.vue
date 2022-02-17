<template>
  <transition name="modal">
    <div class="modal__wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">Default header</slot>
          <span class="button-close circle-block" @click="$emit('close')">×</span>
        </div>
        <div class="modal-body">
          <slot name="body">Default body</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.key === "Escape") this.$emit("close");
    });
  },
  computed: {},
  methods: {
  },
};
</script>

<style scoped>
.modal-enter, .modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}

.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, .40);
  padding: 1rem;
}

.modal-content {
  position: relative;
  background-color: #f7f7f7;
  transition: all .2s ease;
  border-radius: 0.25rem;
  z-index: 999;
  width: 55vw;
  max-width: 1200px;
  min-height: 500px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  /*padding-bottom: 1rem;*/
  border-bottom: 1px solid #E5E5E5;
  padding: 1rem 1rem;
  width: 100%;
  gap: 1rem;
}
.button-close {
  color: black;
  width: 30px;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: #fac22e;
  box-shadow: 0px 1px 20px black;
  border-radius: 50px;
  text-align: center;

}

.modal-body {
  height: 100%;
/*  overflow: auto;*/
}


</style>
