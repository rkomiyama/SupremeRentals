<template>
  <v-container fluid>
    <v-layout wrap>
      <InventoryCard
        v-for="(car, i) in inventory"
        :key="i"
        :car="car"
      />
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import InventoryCard from './InventoryCard'

export default {
  name: 'InventoryContainer',
  computed: {
    ...mapState({
      inventory: state => state.inventory
    })
  },
  components: {
    InventoryCard
  }
}
</script>
