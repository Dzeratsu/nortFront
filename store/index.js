
export const state = () => ({
  userName: '',
  acsess: '2',
  orders: 'test',
  manager: '555',
  month: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  statusOrders: ['Не взят в работу', 'Отправлено дилеру', 'Отправлен прайс-лист', 'Завершен'],
  statusSource: ['Сайт', 'Входящий звонок', 'Почта', 'Нашел менеджер'],
  product: ['«Pirilax®»-Classic', '«Pirilax®»-Lux', '«Pirilax®»-Prime', '«Pirilax®»-Terma', '«Пирилакс»-К45 + «Krasula»', '«ОЗОН®-007»', '«МИГ®-09»']
})
export const mutations = {
  addOrders(state, response) {
    state.orders = response.reverse()
  },
  userData(state, payload){
    state.acsess = payload.acsess
    state.userName = payload.user
  },
  manager(state, payload){
    state.manager = payload
}
}
export const getters = {
  getOrders(state) {
      return state.orders
  },
  allProduct(state){
    return state.product
  },
  allManager(state){
    return state.manager
  }
}
export const actions = {
  async loadManager({commit}){
    const resp = await this.$axios.get('/api/getAllManager')
    try{
      commit('manager', resp.data)
    }catch(e){
      console.log(e)
      console.log('Не удалось загрузить список менеджеров')
    }
  },
  async loadOrders({commit}, payload) {
    let nowMounth;
    if(payload !== undefined){
      nowMounth = payload
    }else {
   nowMounth = new Date().getMonth()
    }
    const resp = await this.$axios.post(`/api/postMonthOrders/${nowMounth}`)
    commit("addOrders", resp.data)
    await this.dispatch('loadManager')
  },
  acsess({commit}, payload){
    commit("userData", payload)
  },
  async read({commit}, id){
    const resp = await this.$axios.put(`/api/read/${id}`)
    if (resp.data === "sucsses"){
     await this.dispatch('loadOrders')
    }
  }
}
