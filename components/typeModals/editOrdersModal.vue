<template>
  <Modal
    v-show="showModal"
    @close="showModal=false"
  >
    <div slot="header" class="modal-header__title">
      <h1>Редактировать заказ</h1>
    </div>
    <div class="modal-container" slot="body">
      <div class="addOrdersWrapper">
        <div class="addOrders-left">
          <div>
            <p>Имя:</p>
            <input :value="item.name">
          </div>
          <div>
            <p>E-mail:</p>
            <input type="email" :value="item.email" >
          </div>
          <div>
            <p>Телефон:</p>
            <input
                   v-facade="'+7 (###) ###-##-##'"
                   type="text"
                   name="phone"
                   :value="item.phone"
            >
          </div>
          <div>
            <p>Город:</p>
            <input :value="item.sity">
          </div>



        </div>
        <div class="addOrders-right">
          <p>Текст заявки:</p>
          <div>{{item.textOrder}}</div>
        </div>
      </div>
      {{ item }}
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
input{
  padding-left: 15px;
  font-size: 20px;
  border-bottom: 2px solid #fac22e;
  width: 260px;
  height: 40px;
  color: black;
  box-shadow: none;
  outline:none;
}
.addOrders-left div{
  padding-top: 10px;
}
</style>
