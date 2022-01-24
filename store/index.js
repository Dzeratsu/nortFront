
export const state = () => ({
  orders: 'test',
})

export const mutations = {
  addOrders(state, response) {
    state.orders = response
  }
}

export const actions = {
  async loadOrders({commit}) {
    const resp = await this.$axios.post('/api/getMonthOrders')
    commit("addOrders", resp.data)
  }
}
