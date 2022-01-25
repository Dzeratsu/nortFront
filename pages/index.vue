<template>
<div>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      This is a new modal header.
    </template>
    <template v-slot:body>
      This is a new modal body.
    </template>
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
