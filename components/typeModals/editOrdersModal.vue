<template>
  <Modal
    v-show="showModal"
    @close="showModal=false"
  >
    <div slot="header" class="modal-header__title">
      <h1>Редактировать заказ</h1>
    </div>
    <div class="modal-container" slot="body">{{ item }}
      <div class="save"><button class="saveButton">Сохранить</button></div>
    </div>
  </Modal>
</template>

<script>
import modal from "@/components/Modal";
export default {
  name: "editOrdersModal",
  props:['item'],
  components: {
    modal
  },
  data(){
    return{
      showModal: false,
      orderInfo: {
        name: '',
        email: '',
        phone: '',
        sity: '',
        status: '',
        result: []
      }

    }
  }
}
</script>

<style scoped>

</style>
