import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let inventory = []
for (let i = 0; i < 20; i++) {
  inventory.push({
    id: i.toString(),
    image_url: "https://i.imgur.com/HxJFD2t.jpg",
    rate: 125,
    year: 2016,
    make: 'Mazda',
    model: 'MX-5'
  })
}

export default new Vuex.Store({
  state: {
    inventory
  },
  getters: {
    getVehicle: (state) => (id) => {
      return state.inventory.find(vehicle => vehicle.id === id)
    }
  }
})