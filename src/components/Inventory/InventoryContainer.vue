<template>
  <v-container fluid>
    <v-layout
      wrap
    >
      <v-flex
        v-for="(car, i) in inventory"
        :key="i"
        xs12 sm6 md4 lg2
      >
        <v-card
          class="ma-1 elevation-5"
        >
          <v-img
            class="white--text"
            :src="require('@/assets/white_and_red_NDs_small.jpg')"
          >
            <v-card-title class="align-end fill-height">Inventory</v-card-title>
          </v-img>
          <v-card-text>
            <span>{{ car.year }} {{ car.make }} {{ car.model }}</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'InventoryContainer',
  data () {
    return {
      inventory: []
    }
  },
  created () {
    for (let i = 0; i < 20; i++ ) {
      this.inventory.push({
        rate: '$125/day',
        year: '2016',
        make: 'Mazda',
        model: 'MX-5'
      })
    }
  }
}
</script>
