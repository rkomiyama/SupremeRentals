<template>
  <v-flex
    xs12 sm6 md4 lg2
  >
    <router-link
      :to="{
        name: 'vehicle',
        params: { id: car.id }
      }"
      tag="div">
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="ma-1 no-user-select"
          :elevation="hover ? 12 : 2"
          @click="() => {}"
        >
          <v-img
            class="white--text"
            :src="car.image_url"
            gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
          >
            <v-card-title class="align-end fill-height">${{ car.rate }}/day</v-card-title>
          </v-img>
          <v-card-text>
            <span>{{ car.year }} {{ car.make }} {{ car.model }}</span>
          </v-card-text>
        </v-card>
      </v-hover>
    </router-link>
  </v-flex>
</template>

<script>
export default {
  name: 'InventoryCard',
  props: {
    car: {
      id: String,
      image_url: String,
      rate: Number,
      year: Number,
      make: String,
      model: String
    }
  }
}
</script>
