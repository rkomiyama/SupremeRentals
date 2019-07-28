<template>
  <v-container fluid>
    <v-layout
      wrap
    >
      <InventoryCard
        v-for="(car, i) in inventory"
        :key="i"
        :car="car"
      />
    </v-layout>
  </v-container>
</template>

<script>
import InventoryCard from './InventoryCard'

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
        rate: 125,
        year: 2016,
        make: 'Mazda',
        model: 'MX-5'
      })
    }
  },
  components: {
    InventoryCard
  }
}
</script>
