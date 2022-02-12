
export const state = () => ({
  userName: '',
  acsess: '',
  orders: 'test',
  statusOrders: ['Не взят в работу', 'Отправлено дилеру', 'Отправлен прайс-лист', 'Завершен'],
  statusSource: ['Сайт', 'Входящий звонок', 'Почта', 'Нашел менеджер']
})
export const mutations = {
  addOrders(state, response) {
    state.orders = response.reverse()
  },
  userData(state, payload){
    state.acsess = payload.acsess
    state.userName = payload.user
  }
}
export const getters = {
  getOrders(state) {
      return state.orders
  }
}
export const actions = {
  async loadOrders({commit}) {
    const resp = await this.$axios.post('/api/postMonthOrders')
    commit("addOrders", resp.data)
  },
  acsess({commit}, payload){
    commit("userData", payload)
  }
}
