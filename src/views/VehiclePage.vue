<template>
  <v-content>
    <v-container fill-height>
      <v-layout>
        <v-card  class="ma-auto elevation-5">
          <v-img
            class="white--text"
            :src="require('@/assets/white_and_red_NDs_small.jpg')"
            gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
          >
            <v-card-title class="align-end fill-height">${{ car.rate }}/day</v-card-title>
          </v-img>
          <v-card-text>
            <span>{{ car.year }} {{ car.make }} {{ car.model }}</span>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'VehiclePage',
  data () {
    return {
      car: null
    }
  },
  created () {
    this.car = this.getVehicle(this.$route.params.id)
  },
  computed: {
    ...mapGetters([
      'getVehicle'
    ])
  }
}
</script>
