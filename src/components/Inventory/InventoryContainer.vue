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
        <v-card class="ma-1 elevation-5">
          <v-card-title>Inventory</v-card-title>
          <v-card-text>
            <span>Lorem ipsum</span>
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
    let inventory = new Array(20)
    inventory.map((v, i) => {
      inventory[i] = `Car ${i}`
    })
    return {
      inventory
    }
  }
}
</script>
