<template>
  <router-link to="/inventory" tag="div">
    <v-list-item link>
      <v-list-item-action>
        <v-icon>mdi-car-side</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Inventory</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: 'InventoryListItem'
}
</script>
