<template>
  <v-container
    :class="{
    'pa-6': true,
    'pt-0': $vuetify.breakpoint.mdAndDown
    }"
  >
    <v-layout wrap>
      <v-flex xs12>
        <span class="display-1 font-weight-black">{{ car.make }} {{ car.model }}</span>
        <span class="title font-weight-bold"> {{ car.year }}</span>
      </v-flex>
      <v-flex xs12>
        <h2>${{ car.rate }}/day</h2>
      </v-flex>
        <v-flex xs12 lg6>
          <v-icon>mdi-gas-station</v-icon> 30 MPG
        </v-flex>
        <v-flex xs12 lg6>
          <v-icon>mdi-car-door</v-icon> 2 doors
        </v-flex>
        <v-flex xs12 lg6>
          <v-icon v-text="$vuetify.icons.values.carSeat">carSeat</v-icon> 2 seats
        </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs12>
        <h2>Features</h2>
      </v-flex>
      <v-flex xs12 lg6>
        <v-icon v-text="$vuetify.icons.values.gearShift"></v-icon> Manual transmission
      </v-flex>
      <v-flex xs12 lg6>
        <v-icon>mdi-car-convertible</v-icon> Convertible
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VehicleInfo',
  data () {
    return {
      
    }
  },
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
