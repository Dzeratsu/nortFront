  <template>
    <div class="dropdown">
      <div class="dropdown-window" @click="this.isOpen">
        <div>{{text}}</div><div><img src="~/assets/arrow.svg" alt="" width="20px"></div>
      </div>
      <div class="dropdown-items" v-if="this.open" v-click-outside="this.isOpen">
        <p v-for="(item, index) in this.users" @click="enter(item.login)">{{item.FIO}}</p>
      </div>
    </div>
  </template>

  <script>
export default {
      name: "dropdownManager",
      props: ['text'],
      data() {
        return {
          manager: '55',
          open: false,
          description: 'Выберите менеджера',
          num: ''
        }
      },
      methods: {
         isOpen(){
            this.open = !this.open
        },
        enter(payload) {
     /*     this.num = payload
          this.description = this.text[0][this.num]
          this.open = !this.open
          this.$emit(`${this.text[2]}`,{payload: payload})*/
        },
        userFio(){
          for (let item in this.users){
            if(item.login == text){
              console.log(item.login)
              this.manager = item.FIO
              console.log(this.manager)
            }
          }
        }
      },
  computed: {
        users(){
          return this.$store.getters.allManager
        },
  },
  beforeUpdate() {
        this.userFio()
  }
}
  </script>

  <style scoped>

  </style>

</template>
