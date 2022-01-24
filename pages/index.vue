<template>
<div>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">custom header</h3>
  </modal>

</div>
</template>

<script>
import Modal from "../components/Modal";
export default {
  components: {Modal},
  data(){
    return {
      showModal: false
    }
  },
}
</script>
