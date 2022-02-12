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
            <input>
          </div>
          <div>
            <p>E-mail:</p>
            <input type="email">
          </div>
          <div>
            <p>Телефон:</p>
            <input>
          </div>
          <div>
            <p>Город:</p>
            <input>
          </div>
          <div>
              <dropdown v-bind:text="[this.$store.state.statusSource, 'Источник']"/>
        </div>
          </div>
          <div v-if="this.$store.state.acsess > 1">
            <p>Менеджер:</p>
          </div>

        </div>
        <div class="addOrders-right">
          <div><textarea>Текст заявки</textarea></div>
          <div>1231</div>
          <div>1231</div>
        </div>
      </div>
    <div class="save"><button class="saveButton">Сохранить</button></div>
    </div>

  </Modal>
</template>

<script>
import Modal from "../Modal";
import dropdown from "../dropdown";
export default {
  name: "addOrdersModals",
  components: {
    Modal,
    dropdown
  },
  data(){
    return {
      showModal: false
    }
  },
  methods: {
    }
}
</script>

<style scoped>
h1{
  color: black;
  font-size: 25px;
}
.addOrdersWrapper{
  padding: 25px;
  display: flex;
  color: black;
}
.addOrders-left{
  min-width: 300px;
}
.addOrders-left div{
  padding-top: 10px;
}
.save{
  padding-top: 200px;
  text-align: center;
  margin: 0 auto;
}
.saveButton{
  color: black;
  width: 250px;
  height: 50px;
  background: #fac22e;
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
.okno{
  position: relative;
  display: flex;
  margin-top: 10px;
  width: 390px;
  padding: 2px 2px 2px 15px;
  background: #fff;
  -webkit-filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  cursor: pointer;
}
.dropdown-items{
  position: absolute;
  z-index: 9999;
  left: 0;
  width: 390px;
  padding: 2px 2px 2px 15px;
  background: #fff;
  -webkit-filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
}
.dropdown-items p{
  padding-top: 10px;
  text-align: left;
}
.arrow{
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
}
</style>
