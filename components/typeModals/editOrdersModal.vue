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
            <input v-model="orderInfo.name">
          </div>
          <div>
            <p>E-mail:</p>
            <input type="email" v-model="orderInfo.email" >
          </div>
          <div>
            <p>Телефон:</p>
            <input
                   v-facade="'+7 (###) ###-##-##'"
                   type="text"
                   name="phone"
                   v-model="orderInfo.phone"
            >
          </div>
          <div>
            <p>Город:</p>
            <input v-model="orderInfo.sity">
          </div>
          <div>
            <dropdown v-bind:text="[this.$store.state.statusSource, this.$store.state.statusSource[orderInfo.source], 'source']" @source="dataSource"/>
            <dropdown v-bind:text="[this.$store.state.statusOrders, this.$store.state.statusOrders[orderInfo.source], 'status']" @status="dataStatus"/>
          </div>
          <div>
            <p><b>Передать заявку менеджеру:</b></p>
            <dropdown-manager v-bind:text="item.manager" @manager="currentManager"></dropdown-manager>
          </div>
        </div>
        <div class="addOrders-right">
          <p><b>Текст заявки:</b></p>
          <br>
          <div class="textOrder">{{item.textOrder}}</div>
          <div>
            <p class="historyShow" v-on:click="openHistory()">История комментариев</p>
            <div v-if="showHistory">
              <ul v-for="item in orderInfo.result">
              <li>{{item.time}} - {{item.text}}</li>
            </ul>
            </div>
          </div>
          <div class="divArea">
            <p><b>Оставьте свои комментарии к заявке:</b></p><br>
            <textarea class="area" placeholder="введите ваши комментарии"></textarea>
          </div>
        </div>
      </div>
      ----
      {{orderInfo}}
      <div class="save"><button class="saveButton">Сохранить</button></div>
    </div>
  </Modal>
</template>

<script>
import modal from "@/components/Modal";
import DropdownManager from "@/components/dropdownUI/dropdownManager";
export default {
  name: "editOrdersModal",
  props: ['item'],
  components: {
    DropdownManager,
    modal
  },
  data() {
    return {
      showModal: false,
      showHistory: false,
      orderInfo: {
        name: '',
        manager: '',
        email: '',
        phone: '',
        sity: '',
        source: '',
        status: '',
        result: []
      },
      manager: ''
    }
  },
  methods:{
    propsTodata(){
      this.orderInfo.name = this.item.name
      this.orderInfo.email = this.item.email
      this.orderInfo.phone = this.item.phone
      this.orderInfo.sity = this.item.sity
      this.orderInfo.status = this.item.status
      this.orderInfo.source = this.item.source
      this.orderInfo.result = this.item.result
    },
    openHistory(){
      this.showHistory = !this.showHistory
    },
    dataSource(data) {
      this.orderInfo.source = data.payload
    },
    dataStatus(data) {
      this.orderInfo.status = data.payload
    },
    currentManager(data){
      this.orderInfo.manager = data.payload
    }
  },
  created() {
    this.propsTodata()
  }
}
</script>

<style scoped>
h1{
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
.addOrders-left div{
  padding-top: 10px;
}
input:disabled{
  background:red;
}
input::placeholder{
  color: black;
}
.textOrder{
  padding: 15px;
  border: 1px solid #fac22e;
}
.historyShow{
  padding-top: 10px;
  cursor: pointer;
  text-decoration: underline;
}
.divArea{
  padding-top: 50px;
}
.area {
  min-height: 75px;
  max-width: 700px;
  width: 100%;
  border: 1px solid #fac22e;
  border-radius: 3px;
  padding: 10px;
}
</style>
