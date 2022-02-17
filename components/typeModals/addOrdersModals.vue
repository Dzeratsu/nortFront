<template>
  <Modal
    v-show="showModal"
    @close="showModal=false"
  >
    <div slot="header" class="modal-header__title">
      <h1>Создать новый заказ</h1>
    </div>
    <div class="modal-container" slot="body">
      <div class="addOrdersWrapper">
        <div class="addOrders-left">
          <div>
            <p>Имя:</p>
            <input v-model="ordersObject.name">
          </div>
          <div>
            <p>E-mail:</p>
            <input type="email" v-model="ordersObject.email">
          </div>
          <div>
            <p>Телефон:</p>
            <input v-model="ordersObject.phone"
                   v-facade="'+7 (###) ###-##-##'"
                   type="text"
                   name="phone"
                   placeholder="+7 (___) ___−__−__"
            >
          </div>
          <div>
            <p>Город:</p>
            <input v-model="ordersObject.sity">
          </div>
          <div>
              <dropdown v-bind:text="[this.$store.state.statusSource, 'Источник', 'source']" @source="dataSource"/>
              <dropdown v-bind:text="[this.$store.state.statusOrders, 'Статус', 'status']" @status="dataStatus"/>
        </div>
          </div>
          <div v-if="this.$store.state.acsess < 2">
            <p>Менеджер:</p>
          </div>

        <div class="addOrders-right">
          <div>
            <p>Текст заявки:      {{ordersObject}}</p>
            <br/>
            <textarea class="area" v-model="ordersObject.textOrder"></textarea>
          </div>
          <br>
          <div>
            <br>
            <product-add @addObjectProduct="addProduct"/>
          </div>
        </div>
      </div>

      <div class="save"><button class="saveButton" @click="sendOrder()">Сохранить</button></div>
      <v-alert
        v-model="validAlert"
        color="#ff8624"
        dismissible
        type="warning"
      >{{validationInfo}}</v-alert>
    </div>
  </Modal>
</template>

<script>
import Modal from "../Modal";
import dropdown from "../dropdownUI/dropdown";
export default {
  name: "addOrdersModals",
  components: {
    Modal,
    dropdown
  },
  data(){
    return {
      showModal: false,
      validation: false,
      validAlert: false,
      validationInfo: '',
      ordersObject: {
        name: '',
        manager: '',
        month: new Date().getMonth(),
        source: '',
        email: '',
        phone: '',
        sity: '',
        status: '',
        textOrder: '',
        product: ''
      }
    }
  },
  methods: {
    dataSource(data) {
      this.ordersObject.source = data.payload
    },
    dataStatus(data) {
      this.ordersObject.status = data.payload
    },
    validationAlert(payload) {
      this.validationInfo = payload
      this.validAlert = true
    },
    validator() {
      switch ('') {
        case this.ordersObject.name:
          this.validationAlert("Не заполненно имя")
          break;
        case this.ordersObject.email:
          this.validationAlert("Не заполнен email")
          break;
        case this.ordersObject.phone:
          this.validationAlert("Не заполнен телефон")
          break
        case this.ordersObject.sity:
          this.validationAlert("Не заполнен город")
          break
        case this.ordersObject.source:
          this.validationAlert("Не заполнен источник")
          break
        case this.ordersObject.status:
          this.validationAlert("Не заполнен статус")
          break
        case this.ordersObject.textOrder:
          this.validationAlert("Не заполнен текст заявки")
          break
        default:
          this.validation = true
      }
    },
    sendOrder() {
      this.validator()
      if(this.validation){
      this.$axios.post('/api/save', this.ordersObject)
      }
    },
    addProduct(payload) {
      this.ordersObject.product = payload.product
    }
  },
}
</script>

<style scoped>

.addOrders-left div{
  padding-top: 10px;
}

h1{
  color: black;
  font-size: 25px;
}
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
.area {
  min-height: 150px;
  max-width: 700px;
  width: 100%;
  border: 1px solid #fac22e;
  border-radius: 3px;
  padding: 10px;
}
button:disabled {
  background-color: #666666;
}

</style>
